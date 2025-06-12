
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Search, Package, Truck, CheckSquare, ClipboardList } from "lucide-react";

export const ServicesOverviewV3 = () => {
  const services = [
    {
      icon: Search,
      title: "Fabric Inspection",
      description: "Comprehensive fabric quality analysis including weight, color, and defect detection.",
      path: "/v3/services/fabric-inspection"
    },
    {
      icon: ClipboardList,
      title: "First Batch Inspection",
      description: "Initial production verification to ensure quality standards before full manufacturing.",
      path: "/v3/services/first-batch-inspection"
    },
    {
      icon: Package,
      title: "Garment In-Line Inspection",
      description: "Real-time quality monitoring during the production process.",
      path: "/v3/services/garment-inline-inspection"
    },
    {
      icon: CheckSquare,
      title: "Garment Final Inspection",
      description: "Thorough examination of finished garments before shipping.",
      path: "/v3/services/garment-final-inspection"
    },
    {
      icon: Truck,
      title: "Container Loading",
      description: "Verification of proper packing and loading for safe transportation.",
      path: "/v3/services/container-loading"
    }
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive quality inspection services tailored to the textile and apparel industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
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
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple"
            asChild
          >
            <Link to="/v3/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
