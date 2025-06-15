
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target } from "lucide-react";

export const AboutSectionV3 = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">
            About Colombus Inspection Agency
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            With years of experience in the industry, we ensure that your products meet international quality standards and specifications. Our team of professional inspectors is equipped with the knowledge and tools to provide accurate and reliable inspection services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 text-white">
              <Award className="h-12 w-12 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-100 text-sm">Certified quality standards</p>
            </div>
            <div className="text-center bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 text-white">
              <Users className="h-12 w-12 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
              <p className="text-gray-100 text-sm">Professional team</p>
            </div>
            <div className="text-center bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 text-white">
              <Target className="h-12 w-12 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
              <p className="text-gray-100 text-sm">Accurate results</p>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="outline" 
            className="border-cia-brightpurple text-cia-brightpurple hover:bg-cia-brightpurple hover:text-white"
            asChild
          >
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
