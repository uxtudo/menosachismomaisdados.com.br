import { Header } from "@/components/layout";
import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";
import PricingSection from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}