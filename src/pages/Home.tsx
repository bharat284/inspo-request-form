import { Button } from "@/components/ui/button";
import { MainNavigation } from "@/components/MainNavigation";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-aileron-lightblue/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-aileron-darkblue">
                Quality Inspection Services for Your Business
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Colombus Inspection Agency provides comprehensive inspection services to ensure your products meet the highest quality standards.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-aileron-blue text-white hover:bg-aileron-mediumblue"
                  asChild
                >
                  <Link to="/inspection-form">Request Inspection</Link>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-aileron-darkblue">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-aileron-blue">Fabric Inspection</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of fabric quality, weight, color, and defects to ensure materials meet specifications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-aileron-blue">Garment Inspection</h3>
                <p className="text-gray-600">
                  Thorough examination of finished garments for quality, construction, measurements, and appearance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-aileron-blue">Container Loading</h3>
                <p className="text-gray-600">
                  Verification of proper packaging, loading, and securing of products for safe transportation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-aileron-lightblue/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-aileron-darkblue">Our Specialists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-aileron-blue">
                  <img src="/lovable-uploads/eea219e9-195d-4045-97e4-0bcded71cbf0.png" alt="Pranab Das" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-aileron-darkblue">Pranab Das</h3>
                <p className="text-gray-600">Quality Inspection Specialist</p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-aileron-blue">
                  <img src="/lovable-uploads/43d669df-acc1-46ce-88a5-52ec462ad81b.png" alt="Sonia Chauhan" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-aileron-darkblue">Sonia Chauhan</h3>
                <p className="text-gray-600">Senior Inspector</p>
              </div>
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-aileron-blue bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-aileron-darkblue">Neha Sharma</h3>
                <p className="text-gray-600">Quality Control Manager</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-aileron-darkblue">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard 
                name="Sarah Johnson"
                position="Production Manager, TextilePro"
                quote="Colombus Inspection Agency has consistently provided thorough and detailed inspection services. Their team's expertise has helped us maintain our quality standards and meet customer expectations."
              />
              <TestimonialCard 
                name="Mike Chen"
                position="Operations Director, FashionWear Inc."
                quote="Working with Colombus has been a game-changer for our quality control process. Their attention to detail and comprehensive reporting have significantly improved our product quality."
              />
              <TestimonialCard 
                name="Priya Patel"
                position="Supply Chain Manager, GlobalTex"
                quote="The team at Colombus is professional, responsive, and thorough in their inspections. They've become an essential partner in our quality assurance program."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
