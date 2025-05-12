
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const basePath = location.pathname.startsWith("/v1") ? "/v1" : "";
  
  const services = [
    {
      title: "Fabric Inspection",
      description: "Our fabric inspection service provides a comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications. Our inspectors use industry-standard techniques and equipment to detect issues such as:",
      features: [
        "Weaving or knitting defects",
        "Color inconsistencies",
        "Printing problems",
        "Dimensional stability issues",
        "Weight and density variations",
        "Finish quality problems"
      ],
      path: `${basePath}/services/fabric-inspection`
    },
    {
      title: "First Batch Inspection",
      description: "First batch inspection is crucial to verify that initial production meets all quality standards and specifications before full-scale manufacturing begins. This early validation helps prevent costly mistakes and delays. Our first batch inspection includes:",
      features: [
        "Material quality verification",
        "Construction and assembly evaluation",
        "Appearance and finish assessment",
        "Sizing and measurement checks",
        "Functionality testing",
        "Packaging evaluation"
      ],
      path: `${basePath}/services/first-batch-inspection`
    },
    {
      title: "Garment In-Line Inspection",
      description: "Our in-line inspection service monitors the production process while garments are still on the production line. This allows for immediate correction of any issues, reducing wastage and ensuring consistent quality. Key aspects of our in-line inspection include:",
      features: [
        "Real-time quality monitoring",
        "Identification of recurring defects",
        "Process improvement recommendations",
        "Quick corrective action implementation",
        "Production line efficiency assessment"
      ],
      path: `${basePath}/services/garment-inline-inspection`
    },
    {
      title: "Garment Final Inspection",
      description: "Our final inspection service provides a thorough examination of finished garments for quality, construction, measurements, and appearance. We conduct comprehensive checks to ensure products meet all requirements before shipping. Our final inspection covers:",
      features: [
        "Visual inspection for defects",
        "Measurement verification against specifications",
        "Construction quality assessment",
        "Accessories and trim evaluation",
        "Packaging and labeling verification",
        "Product safety and compliance checks"
      ],
      path: `${basePath}/services/garment-final-inspection`
    },
    {
      title: "Container Loading",
      description: "Our container loading inspection service ensures that products are properly packed, loaded, and secured for safe transportation. We verify quantity, packaging integrity, and loading conditions to prevent damage during shipping. Our container loading service includes:",
      features: [
        "Quantity verification",
        "Packaging condition assessment",
        "Loading arrangement evaluation",
        "Securing and bracing verification",
        "Container condition inspection",
        "Documentation verification"
      ],
      path: `${basePath}/services/container-loading`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      <main className="pt-28 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-aileron-darkblue text-center">Our Services</h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-600 mb-12">
                Colombus Inspection Agency offers a comprehensive range of quality inspection services 
                tailored to the textile and apparel industries. Our experienced team ensures your products 
                meet all required standards and specifications.
              </p>
              
              <div className="grid gap-12 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                      <Link to={service.path}>Learn More</Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-aileron-darkblue">Need a Customized Inspection Solution?</h3>
                <p className="text-gray-600 mb-6">
                  We understand that each client has unique requirements. Contact us to discuss how we can tailor our services to meet your specific needs.
                </p>
                <Button className="bg-aileron-blue hover:bg-aileron-mediumblue text-white" asChild>
                  <Link to={`${basePath}/contact`}>Contact Us</Link>
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

export default Services;
