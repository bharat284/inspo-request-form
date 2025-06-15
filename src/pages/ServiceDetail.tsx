
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    "fabric-inspection": {
      title: "Fabric Inspection",
      description: "Comprehensive fabric quality analysis including weight, color, and defect detection.",
      features: [
        "Weaving or knitting defects detection",
        "Color consistency analysis", 
        "Printing quality assessment",
        "Dimensional stability testing",
        "Weight and density verification",
        "Finish quality evaluation"
      ],
      process: [
        "Sample collection and preparation",
        "Visual inspection using standardized lighting",
        "Physical testing for weight and dimensions",
        "Defect classification and documentation",
        "Detailed report generation",
        "Quality rating and recommendations"
      ]
    },
    "first-batch-inspection": {
      title: "First Batch Inspection", 
      description: "Critical validation of initial production to ensure quality standards before full-scale manufacturing.",
      features: [
        "Material quality verification",
        "Construction and assembly evaluation",
        "Appearance and finish assessment", 
        "Sizing and measurement verification",
        "Functionality testing",
        "Packaging evaluation"
      ],
      process: [
        "Initial sample review",
        "Quality standard verification",
        "Construction analysis",
        "Measurement verification",
        "Defect identification",
        "Approval or rejection recommendation"
      ]
    },
    "garment-inline-inspection": {
      title: "Garment In-Line Inspection",
      description: "Real-time production monitoring to identify and correct issues during manufacturing.",
      features: [
        "Real-time quality monitoring",
        "Recurring defect identification",
        "Process improvement recommendations",
        "Quick corrective action implementation", 
        "Production efficiency assessment",
        "Quality trend analysis"
      ],
      process: [
        "Production line setup review",
        "Random sampling during production",
        "Real-time defect tracking",
        "Immediate feedback to production team",
        "Corrective action monitoring",
        "Process optimization recommendations"
      ]
    },
    "garment-final-inspection": {
      title: "Garment Final Inspection",
      description: "Thorough examination of finished garments before shipping to ensure complete quality compliance.",
      features: [
        "Visual inspection for defects",
        "Measurement verification",
        "Construction quality assessment",
        "Accessories and trim evaluation",
        "Packaging and labeling verification", 
        "Safety and compliance checks"
      ],
      process: [
        "Random sampling from finished goods",
        "Comprehensive visual inspection",
        "Measurement verification against specs",
        "Function and durability testing",
        "Documentation review",
        "Final quality certification"
      ]
    },
    "container-loading": {
      title: "Container Loading Supervision",
      description: "Ensuring proper packing, loading, and securing of products for safe transportation.",
      features: [
        "Quantity verification",
        "Packaging condition assessment", 
        "Loading arrangement evaluation",
        "Securing and bracing verification",
        "Container condition inspection",
        "Documentation verification"
      ],
      process: [
        "Pre-loading container inspection",
        "Product quantity verification",
        "Packaging integrity check",
        "Loading supervision and arrangement",
        "Securing and bracing verification",
        "Final documentation and sealing"
      ]
    }
  };

  const service = serviceData[serviceType as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <MainNavigationV3 />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
              Service Not Found
            </h1>
            <Button asChild className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white">
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </main>
        <FooterV3 />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MainNavigationV3 />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-cia-brightpurple hover:bg-cia-purple/10">
              <Link to="/services">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
              {service.title}
            </h1>
            
            <p className="text-xl text-gray-800 mb-12">
              {service.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-8 text-white">
                <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                      <span className="text-gray-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-cia-brightpurple/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
                  Inspection Process
                </h2>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white text-sm font-semibold rounded-full shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-cia-purple/10 to-cia-brightpurple/10 rounded-xl p-8 border border-cia-brightpurple/20">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
                Ready to Get Started?
              </h3>
              <p className="text-gray-800 mb-6">
                Contact us today to discuss your {service.title.toLowerCase()} requirements and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white">
                  <Link to="/inspection-form">Request Inspection</Link>
                </Button>
                <Button variant="outline" asChild className="border-cia-brightpurple text-cia-brightpurple hover:bg-cia-purple/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default ServiceDetail;
