
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
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
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Fabric Inspection</h2>
                  <p className="text-gray-600 mb-4">
                    Our fabric inspection service provides a comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications. Our inspectors use industry-standard techniques and equipment to detect issues such as:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Weaving or knitting defects</li>
                    <li>Color inconsistencies</li>
                    <li>Printing problems</li>
                    <li>Dimensional stability issues</li>
                    <li>Weight and density variations</li>
                    <li>Finish quality problems</li>
                  </ul>
                  <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                    <Link to="/inspection-form">Request Fabric Inspection</Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">First Batch Inspection</h2>
                  <p className="text-gray-600 mb-4">
                    First batch inspection is crucial to verify that initial production meets all quality standards and specifications before full-scale manufacturing begins. This early validation helps prevent costly mistakes and delays. Our first batch inspection includes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Material quality verification</li>
                    <li>Construction and assembly evaluation</li>
                    <li>Appearance and finish assessment</li>
                    <li>Sizing and measurement checks</li>
                    <li>Functionality testing</li>
                    <li>Packaging evaluation</li>
                  </ul>
                  <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                    <Link to="/inspection-form">Request First Batch Inspection</Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Garment In-Line Inspection</h2>
                  <p className="text-gray-600 mb-4">
                    Our in-line inspection service monitors the production process while garments are still on the production line. This allows for immediate correction of any issues, reducing wastage and ensuring consistent quality. Key aspects of our in-line inspection include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Real-time quality monitoring</li>
                    <li>Identification of recurring defects</li>
                    <li>Process improvement recommendations</li>
                    <li>Quick corrective action implementation</li>
                    <li>Production line efficiency assessment</li>
                  </ul>
                  <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                    <Link to="/inspection-form">Request In-Line Inspection</Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Garment Final Inspection</h2>
                  <p className="text-gray-600 mb-4">
                    Our final inspection service provides a thorough examination of finished garments for quality, construction, measurements, and appearance. We conduct comprehensive checks to ensure products meet all requirements before shipping. Our final inspection covers:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Visual inspection for defects</li>
                    <li>Measurement verification against specifications</li>
                    <li>Construction quality assessment</li>
                    <li>Accessories and trim evaluation</li>
                    <li>Packaging and labeling verification</li>
                    <li>Product safety and compliance checks</li>
                  </ul>
                  <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                    <Link to="/inspection-form">Request Final Inspection</Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-semibold mb-4 text-aileron-blue">Container Loading</h2>
                  <p className="text-gray-600 mb-4">
                    Our container loading inspection service ensures that products are properly packed, loaded, and secured for safe transportation. We verify quantity, packaging integrity, and loading conditions to prevent damage during shipping. Our container loading service includes:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Quantity verification</li>
                    <li>Packaging condition assessment</li>
                    <li>Loading arrangement evaluation</li>
                    <li>Securing and bracing verification</li>
                    <li>Container condition inspection</li>
                    <li>Documentation verification</li>
                  </ul>
                  <Button variant="outline" className="text-aileron-blue border-aileron-blue hover:bg-aileron-blue/10" asChild>
                    <Link to="/inspection-form">Request Container Loading Inspection</Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-aileron-darkblue">Need a Customized Inspection Solution?</h3>
                <p className="text-gray-600 mb-6">
                  We understand that each client has unique requirements. Contact us to discuss how we can tailor our services to meet your specific needs.
                </p>
                <Button className="bg-aileron-blue hover:bg-aileron-mediumblue text-white" asChild>
                  <Link to="/contact">Contact Us</Link>
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
