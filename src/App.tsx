
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexV3 from "./pages/IndexV3";
import AboutV3 from "./pages/AboutV3";
import ContactV3 from "./pages/ContactV3";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import InspectionFormPage from "./pages/InspectionForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes - All V3 */}
          <Route path="/" element={<IndexV3 />} />
          <Route path="/about" element={<AboutV3 />} />
          <Route path="/contact" element={<ContactV3 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/inspection-form" element={<InspectionFormPage />} />
          
          {/* V3 Routes (for backward compatibility) */}
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/v3/about" element={<AboutV3 />} />
          <Route path="/v3/contact" element={<ContactV3 />} />
          <Route path="/v3/services" element={<Services />} />
          <Route path="/v3/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/v3/inspection-form" element={<InspectionFormPage />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
