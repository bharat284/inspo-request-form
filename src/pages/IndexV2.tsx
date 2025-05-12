
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      <main>
        <section className="bg-gradient-to-r from-aileron-mediumblue to-aileron-blue py-24 px-6 relative overflow-hidden mt-16">
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Quality Inspection Services for Your Business
                </h1>
                <p className="text-lg opacity-90 mb-8">
                  Colombus Inspection Agency provides comprehensive inspection services to ensure your products meet the highest quality standards.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-white text-aileron-darkblue hover:bg-gray-100 shadow-lg"
                    asChild
                  >
                    <Link to="/inspection-form">
                      Request Inspection <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3">
                  <img 
                    src="/quality-inspection.jpg" 
                    alt="Quality Inspection" 
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-aileron-darkblue">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We provide comprehensive inspection services to ensure quality control throughout your supply chain</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-aileron-blue to-aileron-mediumblue p-8 rounded-xl shadow-lg text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fabric Inspection</h3>
                <p className="opacity-90 mb-4">
                  Comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications.
                </p>
                <Button variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white" asChild>
                  <Link to="/services/fabric-inspection">Learn More</Link>
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-aileron-blue to-aileron-mediumblue p-8 rounded-xl shadow-lg text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Garment Inspection</h3>
                <p className="opacity-90 mb-4">
                  Thorough examination of finished garments for quality, construction, measurements, and appearance.
                </p>
                <Button variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white" asChild>
                  <Link to="/services/garment-final-inspection">Learn More</Link>
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-aileron-blue to-aileron-mediumblue p-8 rounded-xl shadow-lg text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Container Loading</h3>
                <p className="opacity-90 mb-4">
                  Verification of proper packaging, loading, and securing of products for safe transportation.
                </p>
                <Button variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white" asChild>
                  <Link to="/services/container-loading">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-aileron-blue hover:bg-aileron-mediumblue text-white" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-aileron-blue text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Sophia Chen"
                position="Production Manager"
                quote="Their inspection team's attention to detail helped us identify and fix quality issues before shipment."
              />
              
              <TestimonialCard 
                name="James Wilson"
                position="Quality Director"
                quote="Colombus Inspection Agency has been an invaluable partner in maintaining our quality standards."
              />
              
              <TestimonialCard 
                name="Aisha Patel" 
                position="Operations Head"
                quote="The thoroughness and professionalism of their inspectors have significantly improved our product quality."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-aileron-darkblue">About Colombus Inspection Agency</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-6">
                  Colombus Inspection Agency (CIA) is a leading quality control and inspection service provider specializing in textile, apparel, and consumer goods. With years of experience in the industry, we ensure that your products meet international quality standards and specifications.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team of professional inspectors is equipped with the knowledge and tools to provide accurate and reliable inspection services across the manufacturing process - from raw materials to finished products.
                </p>
                <div className="flex justify-center">
                  <Button variant="default" className="bg-aileron-blue hover:bg-aileron-mediumblue text-white" asChild>
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-aileron-darkblue to-aileron-blue text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="mb-8 opacity-90">
                  Ready to ensure the quality of your products? Get in touch with our team to schedule an inspection or learn more about our services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>info@colombus-ia.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>+91 8920465078</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>1st Floor, 724/A, Nyay Khand-3, Indirapuram, Ghaziabad - 201012</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-white text-aileron-darkblue hover:bg-white/90"
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
                  <img 
                    src="/lovable-uploads/a26b9068-59f9-45cd-bcc6-1a81126339d2.png" 
                    alt="Business Card" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndexV2;
