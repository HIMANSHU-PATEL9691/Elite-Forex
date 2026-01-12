import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/HeroSection";
import { LiveTicker } from "@/components/LiveTicker";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <LiveTicker />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
