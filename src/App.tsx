
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import IndexV3 from "./pages/IndexV3";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
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
          {/* V3 Routes */}
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/v3/about" element={<About />} />
          <Route path="/v3/contact" element={<Contact />} />
          <Route path="/v3/services" element={<Services />} />
          <Route path="/v3/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/v3/inspection-form" element={<InspectionFormPage />} />
          
          {/* V2 Routes (Default) */}
          <Route path="/" element={<IndexV2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/inspection-form" element={<InspectionFormPage />} />
          
          {/* V1 Routes */}
          <Route path="/v1" element={<Index />} />
          <Route path="/v1/about" element={<About />} />
          <Route path="/v1/contact" element={<Contact />} />
          <Route path="/v1/services" element={<Services />} />
          <Route path="/v1/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/v1/inspection-form" element={<InspectionFormPage />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
