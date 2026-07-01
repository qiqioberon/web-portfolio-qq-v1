import { useEffect, useRef } from "react";
import {
	Mail,
	ArrowUpRight,
	Twitter,
	Dribbble,
	Github,
	Linkedin,
} from "lucide-react";
import { gsap } from "@/hooks/useGSAP";

const socials = [
	{ name: "Twitter", icon: Twitter, href: "#" },
	{ name: "Dribbble", icon: Dribbble, href: "#" },
	{ name: "GitHub", icon: Github, href: "#" },
	{ name: "LinkedIn", icon: Linkedin, href: "#" },
];

const Contact = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const labelRef = useRef<HTMLSpanElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descRef = useRef<HTMLParagraphElement>(null);
	const emailRef = useRef<HTMLAnchorElement>(null);
	const socialsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cleanup: Array<() => void> = [];

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 75%",
					toggleActions: "play none none none",
					once: true,
				},
			});

			tl.fromTo(
				labelRef.current,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
			)
				.fromTo(
					titleRef.current,
					{ opacity: 0, y: 60, skewY: 3 },
					{ opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power3.out" },
					"-=0.4",
				)
				.fromTo(
					descRef.current,
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
					"-=0.5",
				)
				.fromTo(
					emailRef.current,
					{ opacity: 0, scale: 0.9 },
					{ opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
					"-=0.3",
				)
				.fromTo(
					socialsRef.current?.children || [],
					{ opacity: 0, y: 20, scale: 0.8 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.5,
						ease: "back.out(1.7)",
						stagger: 0.1,
					},
					"-=0.4",
				);

			// Email hover animation
			const email = emailRef.current;
			if (email) {
				const handleMouseEnter = () => {
					gsap.to(email, {
						scale: 1.05,
						duration: 0.3,
						ease: "power2.out",
					});
				};

				const handleMouseLeave = () => {
					gsap.to(email, {
						scale: 1,
						duration: 0.3,
						ease: "power2.out",
					});
				};

				email.addEventListener("mouseenter", handleMouseEnter);
				email.addEventListener("mouseleave", handleMouseLeave);

				cleanup.push(() => {
					email.removeEventListener("mouseenter", handleMouseEnter);
					email.removeEventListener("mouseleave", handleMouseLeave);
				});
			}
		}, sectionRef);

		return () => {
			cleanup.forEach((fn) => fn());
			ctx.revert();
		};
	}, []);

	return (
		<section ref={sectionRef} id="contact" className="py-32 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<div ref={contentRef}>
					<span
						ref={labelRef}
						className="text-primary text-sm font-mono tracking-wider uppercase mb-4 block opacity-0"
					>
						Get in Touch
					</span>
					<h2
						ref={titleRef}
						className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 opacity-0"
					>
						Let's Work Together
					</h2>
					<p
						ref={descRef}
						className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0"
					>
						Have a project in mind or just want to chat? I'm always excited to
						connect with fellow creatives and explore new opportunities.
					</p>

					{/* Email CTA */}
					<div className="mb-16">
						<a
							ref={emailRef}
							href="mailto:aquq1q1.farrukh@gmail.com"
							className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-primary transition-colors opacity-0"
						>
							<Mail className="w-8 h-8" />
							aquq1q1.farrukh@gmail.com
							<ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
						</a>
					</div>

					{/* Socials */}
					<div
						ref={socialsRef}
						className="flex items-center justify-center gap-4"
					>
						{socials.map((social) => {
							const Icon = social.icon;
							return (
								<a
									key={social.name}
									href={social.href}
									className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all opacity-0"
									aria-label={social.name}
								>
									<Icon className="w-5 h-5" />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
