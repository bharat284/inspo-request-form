
import { Button } from "@/components/ui/button";
import { InspectionForm } from "@/components/InspectionForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";

const Index = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'form'>('home');
  
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
              alt="Colombus Inspection Agency Logo" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setCurrentTab('home')}
              className={`text-sm font-medium transition-colors ${currentTab === 'home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Home
            </button>
            <Link 
              to="/v1/inspection-form" 
              className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              Request Form
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Services</Link>
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Contact</Link>
          </nav>
          <Button 
            variant="default" 
            className="bg-black text-white hover:bg-gray-800 hidden md:inline-flex"
            asChild
          >
            <Link to="/v1/inspection-form">Request Inspection</Link>
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {currentTab === 'home' ? (
          <>
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Quality Inspection Services for Your Business
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Colombus Inspection Agency provides comprehensive inspection services to ensure your products meet the highest quality standards.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="bg-black text-white hover:bg-gray-800"
                      asChild
                    >
                      <Link to="/v1/inspection-form">Request Inspection</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">Fabric Inspection</h3>
                    <p className="text-gray-600">
                      Comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">Garment Inspection</h3>
                    <p className="text-gray-600">
                      Thorough examination of finished garments for quality, construction, measurements, and appearance.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-3">Container Loading</h3>
                    <p className="text-gray-600">
                      Verification of proper packaging, loading, and securing of products for safe transportation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">About Colombus Inspection Agency</h2>
                  <p className="text-gray-600 mb-6">
                    Colombus Inspection Agency (CIA) is a leading quality control and inspection service provider specializing in textile, apparel, and consumer goods. With years of experience in the industry, we ensure that your products meet international quality standards and specifications.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our team of professional inspectors is equipped with the knowledge and tools to provide accurate and reliable inspection services across the manufacturing process - from raw materials to finished products.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <div className="max-w-lg mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                        <p className="text-gray-600">
                          1st Floor, 724/A, Nyay Khand-3, Indirapuram<br />
                          Ghaziabad - 201012<br />
                          U.P. India
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-5 w-5 text-gray-500" />
                          <a href="mailto:info@colombusinspectionagency.com" className="text-gray-600">info@colombusinspectionagency.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-gray-500" />
                          <a href="tel:+918920465078" className="text-gray-600">+91 8920465078</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-gray-500" />
                          <a href="tel:+919625912724" className="text-gray-600">+91 9625912724</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="container mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Inspection Request Form</h2>
            <InspectionForm />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
