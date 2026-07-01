import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/hooks/useGSAP";

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const tagRef = useRef<HTMLDivElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const scrollIndicatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Timeline for hero entrance
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

			// Tag animation
			tl.fromTo(
				tagRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1 },
			);

			// Split headline into lines and animate
			if (headlineRef.current) {
				const lines = headlineRef.current.querySelectorAll(".hero-line");
				tl.fromTo(
					lines,
					{
						opacity: 0,
						y: 100,
						skewY: 7,
					},
					{
						opacity: 1,
						y: 0,
						skewY: 0,
						duration: 1.2,
						stagger: 0.15,
					},
					"-=0.5",
				);
			}

			// Subtitle
			tl.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1 },
				"-=0.6",
			);

			// CTA buttons
			tl.fromTo(
				ctaRef.current?.children || [],
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
				"-=0.4",
			);

			// Scroll indicator
			tl.fromTo(
				scrollIndicatorRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.6 },
				"-=0.2",
			);

			// Parallax on scroll
			gsap.to(headlineRef.current, {
				y: 90,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true,
				},
			});

			// Keep content visible longer and fade only when the section is near exit
			gsap.to([tagRef.current, subtitleRef.current, ctaRef.current], {
				opacity: 0.35,
				y: -20,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "bottom 35%",
					end: "bottom top",
					scrub: true,
					invalidateOnRefresh: true,
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const scrollToWorks = () => {
		document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

			{/* Subtle grid pattern */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
					backgroundSize: "100px 100px",
				}}
			/>

			{/* Glow effect */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

			<div className="relative z-10 max-w-5xl mx-auto text-center">
				{/* Tag */}
				<div ref={tagRef} className="mb-8 opacity-0">
					<span className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground font-mono tracking-wider uppercase">
						Graphic Designer & Software Engineer
					</span>
				</div>

				{/* Main headline */}
				<h1
					ref={headlineRef}
					className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8 overflow-hidden"
				>
					<span className="hero-line block overflow-hidden">
						<span className="inline-block">Crafting Bold &</span>
					</span>
					<span className="hero-line block overflow-hidden">
						<span className="inline-block text-gradient">Playful Web</span>
					</span>
					<span className="hero-line block overflow-hidden">
						<span className="inline-block">Experiences</span>
					</span>
				</h1>

				{/* Subtitle */}
				<p
					ref={subtitleRef}
					className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 font-mono"
				>
					I'm Aqil — a freelance Graphic Designer and Software Engineer
					passionate about creating immersive digital experiences that captivate
					and convert.
				</p>

				{/* CTA */}
				<div
					ref={ctaRef}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button
						onClick={scrollToWorks}
						size="lg"
						className="group px-8 py-6 text-lg font-semibold glow"
					>
						View Selected Works
						<ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="px-8 py-6 text-lg font-semibold border-border hover:bg-card hover:border-primary/50"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Get in Touch
					</Button>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				ref={scrollIndicatorRef}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
			>
				<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
					<div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
