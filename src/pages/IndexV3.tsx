
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { HeroSectionV3 } from "@/components/HeroSectionV3";
import { ServicesOverviewV3 } from "@/components/ServicesOverviewV3";
import { AboutSectionV3 } from "@/components/AboutSectionV3";
import { TestimonialsV3 } from "@/components/TestimonialsV3";
import { ContactSectionV3 } from "@/components/ContactSectionV3";
import { ClientCarouselV3 } from "@/components/ClientCarouselV3";

const IndexV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigationV3 />
      
      <main>
        <HeroSectionV3 />
        
        {/* Statistics Section */}
        <section className="py-12 bg-gradient-to-r from-cia-purple/5 to-cia-brightpurple/5">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md">
                <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-cia-brightpurple/20">
                  <div className="text-3xl font-bold text-cia-brightpurple mb-2">12+</div>
                  <div className="text-gray-600 font-medium">Years of Business Experience</div>
                </div>
                <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-cia-brightpurple/20">
                  <div className="text-3xl font-bold text-cia-brightpurple mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ClientCarouselV3 />
        <ServicesOverviewV3 />
        <AboutSectionV3 />
        <TestimonialsV3 />
        <ContactSectionV3 />
      </main>

      <FooterV3 />
    </div>
  );
};

export default IndexV3;
