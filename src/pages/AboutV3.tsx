import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { Button } from "@/components/ui/button";
import { Award, Users, Target } from "lucide-react";

const AboutV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigationV3 />

      <main className="pt-28 pb-20">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent text-center leading-tight">About Colombus Inspection Agency</h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <img 
                  src="/lovable-uploads/7f13fd27-c4b7-4d3d-b49d-c7c3bede087e.png" 
                  alt="Colombus Inspection Agency Logo" 
                  className="h-24 mx-auto mb-8"
                />
                
                <p className="text-gray-800 mb-6">
                  Colombus Inspection Agency (CIA) is a leading quality control and inspection service provider specializing in textile, apparel, and consumer goods. With years of experience in the industry, we ensure that your products meet international quality standards and specifications.
                </p>
                
                <p className="text-gray-800 mb-6">
                  Founded with a vision to enhance product quality and customer satisfaction, Colombus Inspection Agency has grown to become a trusted partner for manufacturers and retailers worldwide. Our team of professional inspectors is equipped with the knowledge and tools to provide accurate and reliable inspection services across the manufacturing process - from raw materials to finished products.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">Our Mission</h2>
                  <p className="text-gray-800">
                    To provide exceptional quality inspection services that help our clients deliver products that exceed customer expectations, while maintaining the highest standards of integrity, accuracy, and professionalism.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">Our Vision</h2>
                  <p className="text-gray-800">
                    To be the most trusted and reliable quality inspection partner in the industry, recognized for our expertise, innovation, and commitment to excellence.
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">Our Team</h2>
                <p className="text-gray-800 mb-6">
                  Our team consists of highly skilled and experienced professionals with deep knowledge of manufacturing processes, quality standards, and industry requirements. Each inspector undergoes rigorous training and regular skill updates to ensure they stay at the forefront of quality inspection practices.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="text-center">
                    <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-cia-brightpurple">
                      <img src="/lovable-uploads/eea219e9-195d-4045-97e4-0bcded71cbf0.png" alt="Pranab Das" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-cia-brightpurple">Pranab Das</h3>
                    <p className="text-gray-800">Senior Inspector</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-cia-brightpurple">
                      <img src="/lovable-uploads/43d669df-acc1-46ce-88a5-52ec462ad81b.png" alt="Sonia Chauhan" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-cia-brightpurple">Sonia Chauhan</h3>
                    <p className="text-gray-800">Senior Inspector</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white text-center">
                    <Award className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                    <p className="text-gray-100 text-sm">Certified quality standards</p>
                  </div>
                  <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white text-center">
                    <Users className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                    <p className="text-gray-100 text-sm">Professional team</p>
                  </div>
                  <div className="bg-gradient-to-br from-cia-purple to-cia-brightpurple rounded-xl p-6 border border-cia-brightpurple/20 text-white text-center">
                    <Target className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                    <p className="text-gray-100 text-sm">Accurate results</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cia-purple to-cia-brightpurple bg-clip-text text-transparent">Why Choose Us?</h2>
                <ul className="space-y-4 list-disc pl-5 text-gray-800">
                  <li>Experienced team of professional inspectors</li>
                  <li>Comprehensive inspection services across the supply chain</li>
                  <li>Detailed and accurate reporting</li>
                  <li>Fast turnaround times</li>
                  <li>Customized inspection solutions to meet your specific needs</li>
                  <li>Competitive pricing without compromising quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default AboutV3;
