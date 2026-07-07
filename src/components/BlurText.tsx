import {
	type CSSProperties,
	type ElementType,
	type TransitionEvent,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type BlurTextProps = {
	text?: string;
	delay?: number;
	className?: string;
	animateBy?: "words" | "letters";
	direction?: "top" | "bottom";
	threshold?: number;
	rootMargin?: string;
	easing?: string;
	onAnimationComplete?: () => void;
	stepDuration?: number;
	as?: ElementType;
};

const getHiddenTransform = (direction: "top" | "bottom") =>
	`translate3d(0, ${direction === "top" ? "-48px" : "48px"}, 0)`;

export const BlurText = ({
	text = "",
	delay = 200,
	className = "",
	animateBy = "words",
	direction = "top",
	threshold = 0.1,
	rootMargin = "0px",
	easing = "cubic-bezier(0.22, 1, 0.36, 1)",
	onAnimationComplete,
	stepDuration = 0.55,
	as: Component = "p",
}: BlurTextProps) => {
	const elements = useMemo(
		() => (animateBy === "words" ? text.split(" ") : text.split("")),
		[animateBy, text],
	);
	const [inView, setInView] = useState(false);
	const ref = useRef<HTMLElement>(null);
	const hasCompletedRef = useRef(false);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			setInView(true);
			return;
		}

		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setInView(true);
				observer.unobserve(entry.target);
			},
			{ threshold, rootMargin },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold, rootMargin, prefersReducedMotion]);

	const hiddenStyle = useMemo<CSSProperties>(
		() => ({
			filter: "blur(10px)",
			opacity: 0,
			transform: getHiddenTransform(direction),
		}),
		[direction],
	);

	const visibleStyle = useMemo<CSSProperties>(
		() => ({
			filter: "blur(0px)",
			opacity: 1,
			transform: "translate3d(0, 0, 0)",
		}),
		[],
	);

	const handleTransitionEnd = (event: TransitionEvent<HTMLSpanElement>) => {
		if (
			event.propertyName !== "transform" ||
			hasCompletedRef.current ||
			!onAnimationComplete
		) {
			return;
		}

		hasCompletedRef.current = true;
		onAnimationComplete();
	};

	return (
		<Component ref={ref} className={`blur-text ${className} flex flex-wrap`}>
			{elements.map((segment, index) => {
				const style: CSSProperties = prefersReducedMotion
					? visibleStyle
					: {
							...(inView ? visibleStyle : hiddenStyle),
							display: "inline-block",
							transitionDelay: `${index * delay}ms`,
							transitionDuration: `${stepDuration * 1000}ms`,
							transitionProperty: "opacity, filter, transform",
							transitionTimingFunction: easing,
							willChange: inView ? "auto" : "transform, filter, opacity",
						};

				return (
					<span
						key={`${segment}-${index}`}
						style={style}
						onTransitionEnd={
							index === elements.length - 1 ? handleTransitionEnd : undefined
						}
					>
						{segment === " " ? "\u00A0" : segment}
						{animateBy === "words" && index < elements.length - 1 && "\u00A0"}
					</span>
				);
			})}
		</Component>
	);
};

export default BlurText;
