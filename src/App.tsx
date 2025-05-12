
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import InspectionFormPage from "./pages/InspectionForm";
import NotFound from "./pages/NotFound";
import { VersionSwitcher } from "./components/VersionSwitcher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <VersionSwitcher />
        <Routes>
          {/* V2 Routes */}
          <Route path="/" element={<IndexV2 />} />
          <Route path="/v2/inspection-form" element={<InspectionFormPage />} />
          
          {/* V1 Routes */}
          <Route path="/v1" element={<Index />} />
          <Route path="/v1/inspection-form" element={<InspectionFormPage />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
