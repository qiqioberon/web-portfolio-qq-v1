import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollHandler from "./components/RouteScrollHandler";
import Index from "./pages/Index";
import TargetCursor from "./components/TargetCursor";
import { BootLoader } from "./components/BootLoader";
import { BootStateContext } from "./hooks/useBootState";

const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectCaseStudy = lazy(() => import("./pages/ProjectCaseStudy"));
const DesignCaseStudy = lazy(() => import("./pages/DesignCaseStudy"));

const queryClient = new QueryClient();
const CURSOR_TARGETS = [
  "a[href]:not([data-cursor-ignore])",
  "button:not(:disabled):not([data-cursor-ignore])",
  '[role="button"]:not([aria-disabled="true"]):not([data-cursor-ignore])',
].join(", ");

const App = () => {
  const [isBooting, setIsBooting] = useState(true);
  const finishBoot = useCallback(() => setIsBooting(false), []);
  const bootState = useMemo(() => ({ isBooting }), [isBooting]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BootStateContext.Provider value={bootState}>
          {isBooting && <BootLoader onComplete={finishBoot} />}
          {!isBooting && (
            <TargetCursor
              targetSelector={CURSOR_TARGETS}
              spinDuration={2.4}
              hoverDuration={0.22}
              cursorColor="#e6faff"
              cursorColorOnTarget="#22d3ee"
            />
          )}
          <Toaster />
          <Sonner />
          <div
            aria-hidden={isBooting || undefined}
            inert={isBooting ? true : undefined}
            className={isBooting ? "pointer-events-none select-none" : undefined}
          >
            <BrowserRouter>
              <RouteScrollHandler />
              <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                  <Route path="/design/:slug" element={<DesignCaseStudy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </BootStateContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
