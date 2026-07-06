import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import BlurText from "@/components/BlurText";
import Galaxy from "@/components/Galaxy";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { gsap } from "@/hooks/useGSAP";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const TYPEWRITER_PHRASES = [
	"Playful Web",
	"Intuitive Mobile",
	"AI-Powered",
	"Data-Driven",
];

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const tagRef = useRef<HTMLDivElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const scrollIndicatorRef = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (prefersReducedMotion) return;

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
	}, [prefersReducedMotion]);

	const scrollToWorks = () => {
		document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
		>
			<div className="absolute inset-0 bg-background" aria-hidden="true">
				<Galaxy
					density={0.85}
					starSpeed={0.35}
					hueShift={155}
					speed={0.45}
					glowIntensity={0.25}
					saturation={0.35}
					twinkleIntensity={0.22}
					rotationSpeed={0.025}
					repulsionStrength={0.7}
					disableAnimation={prefersReducedMotion}
					mouseInteraction={!prefersReducedMotion}
				/>
			</div>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.18)_45%,hsl(var(--background)/0.88)_100%)]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/25 via-background/10 to-background"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-5xl text-center">
				<div ref={tagRef} className="mb-8">
					<span className="inline-block rounded-full border border-border bg-card/70 px-4 py-2 font-mono text-sm uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
						Graphic Designer & Software Engineer
					</span>
				</div>

				<h1
					ref={headlineRef}
					className="mb-8 text-4xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
					aria-label="Crafting Bold and Playful Web Experiences"
				>
					<span aria-hidden="true">
						<BlurText
							as="span"
							text="Crafting Bold &"
							animateBy="words"
							direction="bottom"
							delay={90}
							className="justify-center"
						/>
						<span className="flex min-h-[1.05em] items-center justify-center overflow-hidden">
							<TextType
								as="span"
								text={TYPEWRITER_PHRASES}
								typingSpeed={68}
								deletingSpeed={36}
								initialDelay={900}
								pauseDuration={1600}
								variableSpeed={{ min: 45, max: 90 }}
								cursorCharacter="_"
								className="text-gradient"
								cursorClassName="text-primary"
							/>
						</span>
						<BlurText
							as="span"
							text="Experiences"
							animateBy="words"
							direction="bottom"
							delay={90}
							className="justify-center"
						/>
					</span>
				</h1>

				<p
					ref={subtitleRef}
					className="mx-auto mb-12 max-w-2xl font-mono text-lg leading-relaxed text-muted-foreground md:text-xl"
				>
					I'm Aqil — a freelance Graphic Designer and Software Engineer
					passionate about creating immersive digital experiences that captivate
					and convert.
				</p>

				<div
					ref={ctaRef}
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
						className="border-border bg-background/30 px-8 py-6 text-lg font-semibold backdrop-blur-sm hover:border-primary/50 hover:bg-card"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
					>
						Discuss a Project
					</Button>
				</div>
			</div>

			<div
				ref={scrollIndicatorRef}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2">
					<div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50 motion-reduce:animate-none" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
