
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

export const HeroSectionV3 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cia-purple via-cia-brightpurple to-cia-accent bg-clip-text text-transparent">
              Quality Inspection
              <br />
              <span className="text-cia-brightpurple">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your trusted partner in textile and apparel quality control. 
              Ensuring excellence from fabric to finished goods.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cia-brightpurple to-cia-accent text-white hover:from-cia-accent hover:to-cia-brightpurple px-8 py-4 text-lg"
              asChild
            >
              <Link to="/inspection-form">
                Request Inspection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-cia-brightpurple hover:bg-gray-100 border border-cia-brightpurple px-8 py-4 text-lg"
              asChild
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white">
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Certified Quality</h3>
              <p className="text-gray-100">International standards compliance with detailed reporting</p>
            </div>
            <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white">
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Turnaround</h3>
              <p className="text-gray-100">Quick inspection services without compromising quality</p>
            </div>
            <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Trusted Expertise</h3>
              <p className="text-gray-100">Years of experience in textile and apparel inspection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cia-brightpurple/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cia-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};
