import LeadMagnetHeader from "@/components/sections/lead-magnet-page/lead-magnet-header";
import LeadMagnetHeroSection2 from "@/components/sections/lead-magnet-page-2/lead-magnet-hero-2";
import MaterialOverviewSection from "@/components/sections/lead-magnet-page/material-overview";
import AboutPrimeSection from "@/components/sections/lead-magnet-page/about-prime";
import Footer from "@/components/sections/footer";

export default function LeadMagnetPage2() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <LeadMagnetHeader />
      <main className="flex-grow">
        <LeadMagnetHeroSection2 />
        <MaterialOverviewSection />
        <AboutPrimeSection />
      </main>
      <Footer />
    </div>
  );
}
