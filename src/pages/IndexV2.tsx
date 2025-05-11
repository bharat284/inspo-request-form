
import { Button } from "@/components/ui/button";
import { InspectionForm } from "@/components/InspectionForm";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialCard } from "@/components/TestimonialCard";

const IndexV2 = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'form'>('home');
  
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-aileron-darkblue to-aileron-mediumblue shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
              alt="Colombus Inspection Agency Logo" 
              className="h-12 invert"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`text-sm font-medium transition-colors ${currentTab === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentTab('form')}
              className={`text-sm font-medium transition-colors ${currentTab === 'form' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Inspection Request
            </button>
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <Button 
            variant="default" 
            className="bg-aileron-blue hover:bg-aileron-lightblue text-white hidden md:inline-flex"
            onClick={() => setCurrentTab('form')}
          >
            Request Inspection
          </Button>
        </div>
      </header>

      <main>
        {currentTab === 'home' ? (
          <>
            <section className="bg-gradient-to-r from-aileron-mediumblue to-aileron-blue py-24 px-6 relative overflow-hidden">
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
                        onClick={() => setCurrentTab('form')}
                      >
                        Request Inspection <ArrowRight className="ml-2" />
                      </Button>
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                        Learn More
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
                    <p className="opacity-90">
                      Comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-aileron-blue to-aileron-mediumblue p-8 rounded-xl shadow-lg text-white">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Garment Inspection</h3>
                    <p className="opacity-90">
                      Thorough examination of finished garments for quality, construction, measurements, and appearance.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-aileron-blue to-aileron-mediumblue p-8 rounded-xl shadow-lg text-white">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Container Loading</h3>
                    <p className="opacity-90">
                      Verification of proper packaging, loading, and securing of products for safe transportation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-aileron-darkblue">Why Choose Us</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">With years of experience in quality control and inspection, we ensure your products meet international standards</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-aileron-darkblue">Expertise & Experience</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Experienced inspectors with industry knowledge
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced testing equipment and methodologies
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        In-depth knowledge of international standards
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-aileron-darkblue">Reliable Service</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Quick response time and flexible scheduling
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Detailed inspection reports with clear recommendations
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Ongoing support throughout the manufacturing process
                      </li>
                    </ul>
                  </div>
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
                      <Button variant="default" className="bg-aileron-blue hover:bg-aileron-mediumblue text-white">
                        Learn More About Us
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
                        <span>+1 (555) 123-4567</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>123 Inspection Avenue, Quality City, QC 12345</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-4">Request Information</h3>
                        <form className="space-y-4">
                          <div>
                            <input 
                              type="text" 
                              placeholder="Full Name" 
                              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                          </div>
                          <div>
                            <input 
                              type="email" 
                              placeholder="Email Address" 
                              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                          </div>
                          <div>
                            <textarea 
                              placeholder="Your Message" 
                              rows={4}
                              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                            ></textarea>
                          </div>
                          <Button 
                            className="w-full bg-white text-aileron-darkblue hover:bg-white/90"
                          >
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-aileron-darkblue">Inspection Request Form</h2>
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <InspectionForm />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-aileron-darkblue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
                alt="Colombus Inspection Agency Logo" 
                className="h-10 mb-4 invert"
              />
              <p className="text-gray-300 text-sm mt-2">
                Your trusted partner in quality inspection services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Fabric Inspection</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Garment Inspection</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Container Loading</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Inspection Standards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Quality Control Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">123 Inspection Avenue</li>
                <li className="text-gray-300 text-sm">Quality City, QC 12345</li>
                <li className="text-gray-300 text-sm">info@colombus-ia.com</li>
                <li className="text-gray-300 text-sm">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Colombus Inspection Agency. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexV2;
