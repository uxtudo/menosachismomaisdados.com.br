import { EventHeader } from "@/components/layout/event-header";
import HeroSection from "@/components/sections/hero";
import CountdownSection from "@/components/sections/countdown";

import SpeakersSection from "@/components/sections/event-page/speakers";
import AgendaSection from "@/components/sections/event-page/agenda";
import LocationSection from "@/components/sections/event-page/location";
import SponsorsSection from "@/components/sections/event-page/sponsors";
import EventPricingSection from "@/components/sections/event-page/event-pricing";
import FaqSection from "@/components/sections/faq";

import Footer from "@/components/sections/footer";

export default function EventPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <EventHeader />
      <main className="flex-grow">
        <HeroSection />
        <CountdownSection />
        <AgendaSection />
        <SpeakersSection />
        <LocationSection />
        <EventPricingSection id="pricing" />
        <SponsorsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
