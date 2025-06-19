
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Pre-Production Inspection (PPI)",
      description: "A pre-production inspection is completed right before the beginning of the actual mass production and after the identification/evaluation of vendor or factory to confirm that the vendor understood the order's requirements and specifications and is well prepared for production. Also, sample will be picked and be tested in lab. To get a clear idea of the production schedule and predict any possible problems that could affect the quality of goods, the PPI will set up a preliminary production test to match the golden sample. The PPI thus permits timely corrections and improvement before the mass production is initiated; any nonconformity is immediately reported to avoid delay in shipment.",
      features: [
        "Vendor readiness confirmation",
        "Order requirements verification",
        "Sample testing in laboratory",
        "Production schedule assessment",
        "Quality problem prediction",
        "Golden sample matching test"
      ],
      path: "/services/pre-production-inspection"
    },
    {
      title: "Initial Production Inspection (IPI)",
      description: "This inspection shall be performed at the initial stage of production when 20 to 50 pieces are ready and these are checked for measurement and workmanship. At this stage, we ensure that clients that the products are compliant with the approved samples and the production method are correct.",
      features: [
        "Early stage production verification",
        "Measurement accuracy checks",
        "Workmanship quality assessment",
        "Sample compliance verification",
        "Production method validation",
        "Quality standard confirmation"
      ],
      path: "/services/initial-production-inspection"
    },
    {
      title: "During Production Inspection (DPI)",
      description: "Between 30% and 50% of the manufacturing process the DPI will monitor packed and ready to go products. During the DPI, we check product appearance (AQL), workmanship quality, size measurements, weight check, functionality assortment, accessories, labelling, and logos. Our experts also check the packaging, other tests, and special requirements depending on the product and or export market. The During Production Inspection (DPI) will also cover the raw materials, unfinished products, and the planning of production.",
      features: [
        "Mid-production quality monitoring",
        "AQL appearance inspection",
        "Size and weight verification",
        "Functionality and accessories check",
        "Labelling and logo inspection",
        "Raw materials assessment"
      ],
      path: "/services/during-production-inspection"
    },
    {
      title: "Final Random Inspection (FRI)",
      description: "Final Random Inspection (FRI) is an on-site Product Inspection that ensures the conformity of production to your specifications. This ensures the conformity of your product with its specifications and quality requirement before shipment. This control takes place when 100% of the goods are produced and 80% packed (sometimes it is as per specific requirements of the client).",
      features: [
        "Complete production conformity check",
        "Specification compliance verification",
        "Pre-shipment quality assurance",
        "On-site product inspection",
        "Quality requirement validation",
        "Client-specific requirements check"
      ],
      path: "/services/final-random-inspection"
    },
    {
      title: "100% Full Check Inspection",
      description: "A designated QC team will station at factory site and ensure 100% quality check of the goods. Every piece of product will be inspected and repacked. All defective goods will be sorted out.",
      features: [
        "Dedicated on-site QC team",
        "100% product inspection coverage",
        "Individual piece examination",
        "Complete repacking service",
        "Defective goods separation",
        "Quality assurance guarantee"
      ],
      path: "/services/full-check-inspection"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigationV3 />

      <main className="pt-28 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
                Our Services
              </h1>
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CIA provides inspection services for manufacturers, retailers, traders, and international buyers across diverse industries including textiles, apparels, furniture, home decors, cookware, leather goods, footwear, sports products, luggage, fashion accessories, electrical and electronics, hardgoods, stationery, and toys. Our independent pre-shipment inspections identify potential defects and inconsistencies, safeguarding against costly import risks and product recalls. We conduct on-site inspections before, during, and after production, with compliance experts verifying specifications against factory output according to ISO standards. Our experienced inspectors ensure products meet all regulatory, voluntary, and client-specific requirements across all these industries.
                </p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-12 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-8 border border-cia-brightpurple/20 text-white hover:transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-2xl font-semibold mb-4 text-white">
                      {service.title}
                    </h2>
                    <p className="mb-4 text-gray-100">
                      {service.description}
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-100">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button 
                      className="bg-white text-cia-brightpurple hover:bg-gray-100"
                      asChild
                    >
                      <Link to={service.path}>Learn More</Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
                  Need a Customized Inspection Solution?
                </h3>
                <p className="text-gray-600 mb-6">
                  We understand that each client has unique requirements. Contact us to discuss how we can tailor our services to meet your specific needs.
                </p>
                <p className="text-gray-600 mb-6 font-medium">
                  All inspections are conducted by experts with in-depth knowledge of the latest inspection techniques and technology.
                </p>
                <Button 
                  className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default Services;
