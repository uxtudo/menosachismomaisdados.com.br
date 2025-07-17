import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogClose } from "@/components/ui/dialog";
import { Maximize } from "lucide-react";

const LocationSection = () => (
  <Section id="location" className="bg-[#070C16]">
    <SectionTitle className="text-white">Local do Evento</SectionTitle>
    <SectionSubtitle className="text-white">Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP | E de onde você estiver</SectionSubtitle>
    <div className="mt-12 grid md:grid-cols-[40%_60%] gap-8 items-stretch">
      <Card className="p-6 bg-transparent">
        <img src="https://cubo.network/site-assets/cubo-logo-footer-white.svg" alt="Cubo Logo" className="mb-4 h-10 self-start" />
        <h3 className="text-xl font-bold mb-4 text-white">Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP</h3>
        <p className="text-base mb-4 text-white">
          O evento será realizado em um local de fácil acesso e também com transmissão online para você participar de onde estiver.
        </p>
        <div className="relative cursor-pointer group rounded-lg overflow-hidden">
          <img src="https://imagens.metricasboss.com.br/Foto_Conecta_2022_auditorio_1_44c9744164.webp" alt="Auditório do Evento" className="w-full h-auto max-h-[200px] object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <Button variant="outline" asChild>
          <a href="https://www.google.com/maps/search/?api=1&query=Alameda+Vicente+Pinzon,+54,+Vila+Olímpia,+São+Paulo,+SP" target="_blank" rel="noopener noreferrer">
            Ver no Google Maps
          </a>
        </Button>
      </Card>
      <Card className="p-0 flex items-center justify-center overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Alameda%20Vicente%20Pinzon,%2054%20Vila%20Ol%C3%ADmpia%2004547-130%20S%C3%A3o%20Paulo%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </div>
  </Section>
);

export default LocationSection;
