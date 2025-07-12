import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout";

const EventHeroSection = () => (
  <Section className="w-full">
    <div className="grid place-items-center gap-8 py-20 md:py-32">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center rounded-full border border-secondary px-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-sm py-2">
          <span className="mr-2 text-primary">
            <Badge variant="default">Novo</Badge>
          </span>
          <span> Design Incrível! </span>
        </div>
        <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
          <h1>O Maior Evento de Digital Analytics do Mundo.</h1>
        </div>
        <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Conecte-se com os maiores líderes e descubra as inovações mais recentes em Digital Analytics para impulsionar o futuro do seu negócio.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button size="lg" className="w-5/6 md:w-1/3 font-bold group/arrow">Garanta seu Ingresso<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Button>
          <Button size="lg" variant="outline" className="w-5/6 md:w-1/4 font-bold">Ver Detalhes</Button>
        </div>
      </div>
      <div className="relative group mt-14">
        <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
        <img src="https://placehold.co/1200x600/E0E0E0/FFFFFF?text=Imagem+do+Evento" alt="Imagem do Evento" className="w-full md:w-[1200px] mx-auto rounded-lg relative border border-t-2 border-secondary border-t-primary/30" />
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
      </div>
    </div>
  </Section>
);

export default EventHeroSection;
