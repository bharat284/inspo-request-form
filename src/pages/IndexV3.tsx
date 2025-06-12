
import { MainNavigationV3 } from "@/components/MainNavigationV3";
import { FooterV3 } from "@/components/FooterV3";
import { HeroSectionV3 } from "@/components/HeroSectionV3";
import { ServicesOverviewV3 } from "@/components/ServicesOverviewV3";
import { AboutSectionV3 } from "@/components/AboutSectionV3";
import { TestimonialsV3 } from "@/components/TestimonialsV3";
import { ContactSectionV3 } from "@/components/ContactSectionV3";

const IndexV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigationV3 />
      
      <main>
        <HeroSectionV3 />
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
