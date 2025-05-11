
import { Button } from "@/components/ui/button";
import { InspectionForm } from "@/components/InspectionForm";
import { useState } from "react";

const Index = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'form'>('home');
  
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
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
            <button 
              onClick={() => setCurrentTab('form')}
              className={`text-sm font-medium transition-colors ${currentTab === 'form' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Inspection Request
            </button>
            <a href="#services" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">Contact</a>
          </nav>
          <Button 
            variant="default" 
            className="bg-black text-white hover:bg-gray-800 hidden md:inline-flex"
            onClick={() => setCurrentTab('form')}
          >
            Request Inspection
          </Button>
        </div>
      </header>

      <main>
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
                      onClick={() => setCurrentTab('form')}
                    >
                      Request Inspection
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
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
                      <p className="text-gray-600">123 Inspection Avenue</p>
                      <p className="text-gray-600">Quality City, QC 12345</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                      <p className="text-gray-600">Email: info@colombus-ia.com</p>
                      <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/518bcfa0-fc1f-40e5-b963-86efb8897d05.png" 
                alt="Colombus Inspection Agency Logo" 
                className="h-10 mb-4 invert"
              />
              <p className="text-gray-400 text-sm mt-2">
                Your trusted partner in quality inspection services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Fabric Inspection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Garment Inspection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Container Loading</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Inspection Standards</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Quality Control Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">123 Inspection Avenue</li>
                <li className="text-gray-400 text-sm">Quality City, QC 12345</li>
                <li className="text-gray-400 text-sm">info@colombus-ia.com</li>
                <li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Colombus Inspection Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
