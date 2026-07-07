import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

interface BootLoaderProps {
	onComplete: () => void;
}

const MINIMUM_DISPLAY_MS = 1200;
const MAXIMUM_WAIT_MS = 6000;
const EXIT_DURATION_MS = 450;
const CRITICAL_TASKS = 5;

const getStatus = (progress: number) => {
	if (progress < 25) return "Preparing interface";
	if (progress < 50) return "Loading visual system";
	if (progress < 75) return "Warming up interactions";
	if (progress < 100) return "Finalizing experience";
	return "Ready";
};

export function BootLoader({ onComplete }: BootLoaderProps) {
	const animationContainerRef = useRef<HTMLDivElement>(null);
	const targetProgressRef = useRef(8);
	const [progress, setProgress] = useState(0);
	const [isLottieReady, setIsLottieReady] = useState(false);
	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		let cancelled = false;
		let completedTasks = 0;
		let animation: AnimationItem | undefined;
		const timers = new Set<number>();
		const animationFrames = new Set<number>();
		const abortController = new AbortController();
		const startedAt = performance.now();
		const previousBodyOverflow = document.body.style.overflow;
		const previousHtmlOverflow = document.documentElement.style.overflow;

		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
		document.body.setAttribute("aria-busy", "true");

		const schedule = (callback: () => void, delay: number) => {
			const timer = window.setTimeout(() => {
				timers.delete(timer);
				callback();
			}, delay);
			timers.add(timer);
			return timer;
		};

		const delay = (duration: number) =>
			new Promise<void>((resolve) => schedule(resolve, duration));

		const markTaskComplete = () => {
			if (cancelled) return;
			completedTasks += 1;
			targetProgressRef.current = Math.min(
				90,
				10 + Math.round((completedTasks / CRITICAL_TASKS) * 80),
			);
		};

		const trackTask = async (task: Promise<unknown>) => {
			try {
				await task;
			} catch {
				// A failed optional asset must not trap the user on the loader.
			} finally {
				markTaskComplete();
			}
		};

		const progressTimer = window.setInterval(() => {
			setProgress((current) => {
				const target = targetProgressRef.current;
				if (current >= target) return current;
				const step = target - current > 20 ? 2 : 1;
				return Math.min(target, current + step);
			});
		}, 24);

		const lottieTask = (async () => {
			const lottieModule = await import("lottie-web/build/player/lottie_light");
			if (cancelled || !animationContainerRef.current) return;

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
			animation = lottieModule.default.loadAnimation({
				container: animationContainerRef.current,
				renderer: "svg",
				loop: !prefersReducedMotion,
				autoplay: !prefersReducedMotion,
				path: "/lottie/astronaut-loader.json",
				rendererSettings: {
					preserveAspectRatio: "xMidYMid meet",
				},
			});

			await new Promise<void>((resolve) => {
				let settled = false;
				const finish = () => {
					if (settled) return;
					settled = true;
					setIsLottieReady(true);
					resolve();
				};

				animation?.addEventListener("DOMLoaded", finish);
				animation?.addEventListener("data_failed", finish);
				animation?.addEventListener("error", finish);
			});

			if (prefersReducedMotion) animation.goToAndStop(0, true);
		})();

		const fontTask = document.fonts?.ready.then(() => undefined) ??
			Promise.resolve();

		const logoTask = new Promise<void>((resolve) => {
			const image = new Image();
			const finish = () => resolve();
			image.onload = finish;
			image.onerror = finish;
			image.src = "/logo/dark.svg";
			if (image.complete) finish();
		});

		const windowLoadTask = new Promise<void>((resolve) => {
			if (document.readyState === "complete") {
				resolve();
				return;
			}

			window.addEventListener("load", () => resolve(), {
				once: true,
				signal: abortController.signal,
			});
		});

		const firstPaintTask = new Promise<void>((resolve) => {
			const firstFrame = window.requestAnimationFrame(() => {
				animationFrames.delete(firstFrame);
				const secondFrame = window.requestAnimationFrame(() => {
					animationFrames.delete(secondFrame);
					resolve();
				});
				animationFrames.add(secondFrame);
			});
			animationFrames.add(firstFrame);
		});

		const trackedTasks = [
			lottieTask,
			fontTask,
			logoTask,
			windowLoadTask,
			firstPaintTask,
		].map(trackTask);

		const completeBoot = async () => {
			await Promise.race([
				Promise.allSettled(trackedTasks),
				delay(MAXIMUM_WAIT_MS),
			]);

			const elapsed = performance.now() - startedAt;
			if (elapsed < MINIMUM_DISPLAY_MS) {
				await delay(MINIMUM_DISPLAY_MS - elapsed);
			}

			if (cancelled) return;
			targetProgressRef.current = 100;
			await delay(600);
			if (cancelled) return;

			setProgress(100);
			setIsExiting(true);
			await delay(EXIT_DURATION_MS);
			if (!cancelled) onComplete();
		};

		void completeBoot();

		return () => {
			cancelled = true;
			abortController.abort();
			window.clearInterval(progressTimer);
			timers.forEach((timer) => window.clearTimeout(timer));
			animationFrames.forEach((frame) => window.cancelAnimationFrame(frame));
			animation?.destroy();
			document.body.style.overflow = previousBodyOverflow;
			document.documentElement.style.overflow = previousHtmlOverflow;
			document.body.removeAttribute("aria-busy");
		};
	}, [onComplete]);

	const status = getStatus(progress);

	return (
		<div
			className={`fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-background px-6 transition-all duration-500 ease-out ${
				isExiting ? "pointer-events-none scale-[1.015] opacity-0" : "opacity-100"
			}`}
			role="status"
			aria-label="Loading portfolio"
		>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_42%)]"
				aria-hidden="true"
			/>
			<div className="relative flex w-full max-w-md flex-col items-center">
				<div className="relative mb-4 h-56 w-56 sm:h-64 sm:w-64" aria-hidden="true">
					{!isLottieReady && (
						<img
							src="/logo/dark.svg"
							alt=""
							className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-pulse"
						/>
					)}
					<div ref={animationContainerRef} className="h-full w-full" />
				</div>

				<div className="mb-3 flex w-full items-end justify-between gap-4 font-mono">
					<div>
						<p className="text-[10px] uppercase tracking-[0.28em] text-primary">
							Qiqi Portfolio
						</p>
						<p className="mt-1 text-xs text-muted-foreground" aria-live="polite">
							{status}
						</p>
					</div>
					<span className="text-3xl font-black tabular-nums text-foreground">
						{progress.toString().padStart(2, "0")}
						<span className="ml-1 text-xs font-medium text-muted-foreground">%</span>
					</span>
				</div>

				<div
					className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
					role="progressbar"
					aria-label="Portfolio loading progress"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={progress}
				>
					<div
						className="h-full rounded-full bg-gradient-to-r from-primary to-violet-500 shadow-[0_0_20px_hsl(var(--primary)/0.55)] transition-[width] duration-150 ease-out"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
		</div>
	);
}
