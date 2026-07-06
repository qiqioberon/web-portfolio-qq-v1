import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollHandler from "./components/RouteScrollHandler";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import DesignCaseStudy from "./pages/DesignCaseStudy";
import TargetCursor from "./components/TargetCursor";

const queryClient = new QueryClient();
const CURSOR_TARGETS = [
  "a[href]:not([data-cursor-ignore])",
  "button:not(:disabled):not([data-cursor-ignore])",
  '[role="button"]:not([aria-disabled="true"]):not([data-cursor-ignore])',
].join(", ");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TargetCursor
        targetSelector={CURSOR_TARGETS}
        spinDuration={2.4}
        hoverDuration={0.22}
        cursorColor="#e6faff"
        cursorColorOnTarget="#22d3ee"
      />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/design/:slug" element={<DesignCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
