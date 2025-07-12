import LeadMagnetHeader from "@/components/sections/lead-magnet-page/lead-magnet-header";
import LeadMagnetHeroSection from "@/components/sections/lead-magnet-page/lead-magnet-hero";
import MaterialOverviewSection from "@/components/sections/lead-magnet-page/material-overview";
import AboutPrimeSection from "@/components/sections/lead-magnet-page/about-prime";

import Footer from "@/components/sections/footer";

export default function LeadMagnetPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <LeadMagnetHeader />
      <main className="flex-grow">
        <LeadMagnetHeroSection />
        <MaterialOverviewSection />
        <AboutPrimeSection />
      </main>
      <Footer />
    </div>
  );
}
