
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target } from "lucide-react";

export const AboutSectionV3 = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cia-brightpurple bg-clip-text text-transparent">
              About Colombus Inspection Agency
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With years of experience in the industry, we ensure that your products meet international quality standards and specifications. Our team of professional inspectors is equipped with the knowledge and tools to provide accurate and reliable inspection services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-cia-brightpurple mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">Certified quality standards</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-cia-brightpurple mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300 text-sm">Professional team</p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-cia-brightpurple mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-300 text-sm">Accurate results</p>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-cia-brightpurple text-cia-brightpurple hover:bg-cia-brightpurple hover:text-white"
              asChild
            >
              <Link to="/v3/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cia-brightpurple/20">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="w-full h-full bg-gradient-to-br from-cia-brightpurple to-cia-accent rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a26b9068-59f9-45cd-bcc6-1a81126339d2.png" 
                      alt="Pranab Das" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pranab Das</h3>
                <p className="text-cia-brightpurple mb-4">Founder & Chief Inspector</p>
                <p className="text-gray-300 text-sm">
                  "Quality is not an act, it is a habit. We are committed to ensuring excellence in every inspection."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
