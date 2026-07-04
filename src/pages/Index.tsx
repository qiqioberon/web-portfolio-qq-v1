import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import GraphicDesign from "@/components/sections/GraphicDesign";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { ScrollTrigger } from "@/hooks/useGSAP";
import { projects } from "@/data/projects";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Index = () => {
	usePageMetadata({
		title: "Qiqi — Web Designer & Software Engineer",
		description:
			"Freelance web designer and Software Engineer crafting bold, playful web experiences.",
		image: projects[0]?.cover.src,
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
			<About />
			<Works />
			<GraphicDesign />
			<Services />
			<Contact />
			<Footer />
		</main>
	);
};

export default Index;
