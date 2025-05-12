
import { useParams } from "react-router-dom";
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceDetails = {
  "fabric-inspection": {
    title: "Fabric Inspection",
    description: "Our fabric inspection service provides a comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications.",
    features: [
      "Weaving or knitting defects detection",
      "Color inconsistencies analysis",
      "Printing problems identification",
      "Dimensional stability assessment",
      "Weight and density measurements",
      "Finish quality evaluation"
    ],
    process: [
      "Sampling according to AQL standards",
      "Visual inspection under proper lighting",
      "Measurement and performance testing",
      "Comprehensive reporting with photos"
    ]
  },
  "first-batch-inspection": {
    title: "First Batch Inspection",
    description: "First batch inspection is crucial to verify that initial production meets all quality standards and specifications before full-scale manufacturing begins.",
    features: [
      "Material quality verification",
      "Construction and assembly evaluation",
      "Appearance and finish assessment",
      "Sizing and measurement checks",
      "Functionality testing",
      "Packaging evaluation"
    ],
    process: [
      "Early production sample verification",
      "Comprehensive quality checks",
      "Process evaluation and recommendations",
      "Detailed reporting to prevent mass production issues"
    ]
  },
  "garment-inline-inspection": {
    title: "Garment In-Line Inspection",
    description: "Our in-line inspection service monitors the production process while garments are still on the production line to allow for immediate correction of any issues.",
    features: [
      "Real-time quality monitoring",
      "Identification of recurring defects",
      "Process improvement recommendations",
      "Quick corrective action implementation",
      "Production line efficiency assessment"
    ],
    process: [
      "Regular checks during production",
      "Random sampling from production lines",
      "Immediate feedback to production team",
      "Continuous quality improvement"
    ]
  },
  "garment-final-inspection": {
    title: "Garment Final Inspection",
    description: "Our final inspection service provides a thorough examination of finished garments for quality, construction, measurements, and appearance.",
    features: [
      "Visual inspection for defects",
      "Measurement verification against specifications",
      "Construction quality assessment",
      "Accessories and trim evaluation",
      "Packaging and labeling verification",
      "Product safety and compliance checks"
    ],
    process: [
      "AQL-based random sampling",
      "Comprehensive quality checklist",
      "Measurement against specification",
      "Detailed reporting with photographic evidence"
    ]
  },
  "container-loading": {
    title: "Container Loading",
    description: "Our container loading inspection service ensures that products are properly packed, loaded, and secured for safe transportation.",
    features: [
      "Quantity verification",
      "Packaging condition assessment",
      "Loading arrangement evaluation",
      "Securing and bracing verification",
      "Container condition inspection",
      "Documentation verification"
    ],
    process: [
      "Pre-loading carton inspection",
      "Verification of packaging and labeling",
      "Monitoring of loading process",
      "Final container sealing verification"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  
  // Default to fabric-inspection if serviceType is undefined or not in our list
  const service = serviceType && serviceType in serviceDetails 
    ? serviceDetails[serviceType as keyof typeof serviceDetails] 
    : serviceDetails["fabric-inspection"];
  
  const { title, description, features, process } = service;
  
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      <main className="pt-28 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-aileron-darkblue text-center">{title}</h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-12">
                {description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Our Process</h2>
                  <ul className="list-decimal pl-6 space-y-2 text-gray-600">
                    {process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  variant="default" 
                  className="bg-aileron-blue hover:bg-aileron-mediumblue text-white"
                  asChild
                >
                  <Link to="/inspection-form">Request This Inspection</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
