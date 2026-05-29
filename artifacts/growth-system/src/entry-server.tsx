import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "./AppShell";
import { getSeoMeta, type SeoMeta } from "./lib/seo";

export function render(url: string): { html: string; meta: SeoMeta } {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MemoryRouter initialEntries={[url]}>
          <AppShell />
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  const meta = getSeoMeta(url);
  return { html, meta };
}
