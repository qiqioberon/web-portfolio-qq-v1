import { useEffect } from "react";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import GraphicDesign from "@/components/sections/GraphicDesign";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { ScrollTrigger } from "@/hooks/useGSAP";

export default function DeferredHomeSections() {
	useEffect(() => {
		const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => window.cancelAnimationFrame(frame);
	}, []);

	return (
		<>
			<About />
			<Works />
			<GraphicDesign />
			<Services />
			<Contact />
			<Footer />
		</>
	);
}
