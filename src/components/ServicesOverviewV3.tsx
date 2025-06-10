
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cia-brightpurple bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive quality inspection services tailored to the textile and apparel industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-cia-brightpurple/20 hover:border-cia-brightpurple/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-xl mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-cia-brightpurple text-cia-brightpurple hover:bg-cia-brightpurple hover:text-white"
                    asChild
                  >
                    <Link to={service.path}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
