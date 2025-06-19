
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { serviceType } = useParams();

  const serviceData = {
    "pre-production-inspection": {
      title: "Pre-Production Inspection (PPI)",
      description: "Comprehensive pre-production analysis completed right before mass production begins.",
      features: [
        "Vendor readiness confirmation",
        "Order requirements verification", 
        "Sample testing in laboratory",
        "Production schedule assessment",
        "Quality problem prediction",
        "Golden sample matching test"
      ],
      process: [
        "Vendor evaluation and factory assessment",
        "Order specification verification",
        "Sample collection and laboratory testing",
        "Production schedule review",
        "Golden sample matching test setup",
        "Detailed report with recommendations"
      ]
    },
    "initial-production-inspection": {
      title: "Initial Production Inspection (IPI)", 
      description: "Early-stage production verification when 20-50 pieces are ready for measurement and workmanship checks.",
      features: [
        "Early stage production verification",
        "Measurement accuracy checks",
        "Workmanship quality assessment", 
        "Sample compliance verification",
        "Production method validation",
        "Quality standard confirmation"
      ],
      process: [
        "Initial production sample collection",
        "Measurement verification against specifications",
        "Workmanship quality evaluation",
        "Sample compliance assessment",
        "Production method review",
        "Quality standard confirmation report"
      ]
    },
    "during-production-inspection": {
      title: "During Production Inspection (DPI)",
      description: "Mid-production monitoring when 30-50% of manufacturing is complete.",
      features: [
        "Mid-production quality monitoring",
        "AQL appearance inspection",
        "Size and weight verification",
        "Functionality and accessories check", 
        "Labelling and logo inspection",
        "Raw materials assessment"
      ],
      process: [
        "Production progress assessment",
        "Random sampling from production line",
        "AQL-based appearance inspection",
        "Dimensional and weight verification",
        "Functionality testing",
        "Raw materials and packaging review"
      ]
    },
    "final-random-inspection": {
      title: "Final Random Inspection (FRI)",
      description: "Comprehensive final inspection when 100% of goods are produced and 80% packed.",
      features: [
        "Complete production conformity check",
        "Specification compliance verification",
        "Pre-shipment quality assurance",
        "On-site product inspection",
        "Quality requirement validation", 
        "Client-specific requirements check"
      ],
      process: [
        "Final production sampling",
        "Comprehensive quality assessment",
        "Specification compliance verification",
        "Packaging and labeling inspection",
        "Documentation review",
        "Final quality certification"
      ]
    },
    "full-check-inspection": {
      title: "100% Full Check Inspection",
      description: "Complete quality check with stationed QC team ensuring every piece is inspected.",
      features: [
        "Dedicated on-site QC team",
        "100% product inspection coverage", 
        "Individual piece examination",
        "Complete repacking service",
        "Defective goods separation",
        "Quality assurance guarantee"
      ],
      process: [
        "QC team deployment at factory",
        "Individual product inspection setup",
        "Comprehensive quality checking",
        "Defective goods identification and sorting",
        "Complete product repacking",
        "Final quality assurance report"
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
              <p className="text-gray-800 mb-4">
                Contact us today to discuss your {service.title.toLowerCase()} requirements and get a customized quote.
              </p>
              <p className="text-gray-600 mb-6 font-medium">
                All inspections are conducted by experts with in-depth knowledge of the latest inspection techniques and technology.
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
