
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Search, Package, Truck, CheckSquare, ClipboardList, ScanLine } from "lucide-react";

export const ServicesOverviewV3 = () => {
  const services = [
    {
      icon: Search,
      title: "Pre-Production Inspection",
      description: "Comprehensive pre-production analysis to confirm vendor readiness and sample testing.",
      path: "/services/pre-production-inspection",
      image: "/lovable-uploads/2a2ff791-1ff5-40a8-8c5b-54b6d44397ab.png"
    },
    {
      icon: ClipboardList,
      title: "Initial Production Inspection",
      description: "Early-stage production verification when 20-50 pieces are ready for measurement and workmanship checks.",
      path: "/services/initial-production-inspection",
      image: "/lovable-uploads/cd4323d0-ea68-403f-8d67-cd6dfbfca4cd.png"
    },
    {
      icon: Package,
      title: "During Production Inspection",
      description: "Mid-production monitoring when 30-50% of manufacturing is complete.",
      path: "/services/during-production-inspection",
      image: "/lovable-uploads/1867e35a-92a8-42ed-92f9-4e408efb695d.png"
    },
    {
      icon: CheckSquare,
      title: "Final Random Inspection",
      description: "Comprehensive final inspection when 100% of goods are produced and 80% packed.",
      path: "/services/final-random-inspection",
      image: "/lovable-uploads/5d6489e8-3477-41e6-a084-f744cf2d2848.png"
    },
    {
      icon: ScanLine,
      title: "100% Full Check Inspection",
      description: "Complete quality check with stationed QC team ensuring every piece is inspected.",
      path: "/services/full-check-inspection",
      image: "/lovable-uploads/c98536be-79ec-466b-93fc-293608bb14aa.png"
    },
    {
      icon: Truck,
      title: "Container Loading Inspection",
      description: "Verification of proper packaging, loading, and securing of products for safe transportation.",
      path: "/services/container-loading-inspection",
      image: "/lovable-uploads/d2c7f143-709a-4c21-b304-fd8ea17589c3.png"
    }
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
            Comprehensive Pre-Shipment Inspection Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Third-party inspection services tailored for quality control and compliance in textile, apparel, and manufacturing industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Inspector verifying quality control process`}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <service.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-100 mb-6">{service.description}</p>
                <Button 
                  className="bg-white text-cia-brightpurple hover:bg-gray-100"
                  asChild
                >
                  <Link to={service.path}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-cia-brightpurple">
            Factory Audits to Ensure Supplier Reliability
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Detailed reports with faster turnaround times. Our global inspection standards help minimize defects and shipping errors for international buyers.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
