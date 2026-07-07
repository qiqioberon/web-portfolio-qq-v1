import { lazy, Suspense, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import { ScrollTrigger } from "@/hooks/useGSAP";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const DeferredHomeSections = lazy(
	() => import("@/components/DeferredHomeSections"),
);

const SectionFallback = () => (
	<div aria-hidden="true">
		<section id="about" className="min-h-[60vh]" />
		<section id="works" className="min-h-screen" />
		<section id="design" className="min-h-screen" />
		<section id="services" className="min-h-[60vh]" />
		<section id="contact" className="min-h-[60vh]" />
	</div>
);

const Index = () => {
	usePageMetadata({
		title: "Qiqi — Web Designer & Software Engineer",
		description:
			"Freelance web designer and Software Engineer crafting bold, playful web experiences.",
		image: "/projects/coding-fantasy/website-home.webp",
	});

	useEffect(() => {
		const refreshScrollTrigger = () => ScrollTrigger.refresh();
		const timeouts = [100, 350, 700].map((delay) =>
			window.setTimeout(refreshScrollTrigger, delay),
		);
		const raf = window.requestAnimationFrame(refreshScrollTrigger);

		document.fonts?.ready.then(refreshScrollTrigger);
		window.addEventListener("load", refreshScrollTrigger);

		return () => {
			timeouts.forEach((timeout) => window.clearTimeout(timeout));
			window.cancelAnimationFrame(raf);
			window.removeEventListener("load", refreshScrollTrigger);
		};
	}, []);

	return (
		<main className="min-h-screen overflow-x-hidden bg-background">
			<Navigation />
			<Hero />
			<Suspense fallback={<SectionFallback />}>
				<DeferredHomeSections />
			</Suspense>
		</main>
	);
};

export default Index;
