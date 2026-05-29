import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MagneticCursor } from "@/components/MagneticCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { bindAnchorSmoothScroll } from "@/lib/smooth-scroll";
import { AppShell } from "./AppShell";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => { bindAnchorSmoothScroll(); }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollProgress />
        <MagneticCursor />
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
