import { Button } from "@/components/ui/button";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const HeroSection = () => (
  <Section className="text-center md:text-left bg-[#070C16]">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          O maior evento de <span className="text-[#00BAFF]">Digital Analytics</span> da América Latina
        </h1>
        <p className="text-xl text-white">
          Junte-se às maiores referências nacionais e internacionais do mercado para um mergulho profundo nas últimas tendências e estratégias que estão moldando o futuro do Digital Analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" className="bg-[#189725] hover:bg-[#189725]/90 text-white">Garanta seu ingresso <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Button>
        </div>
      </div>
      <div className="hidden md:block rounded-lg">
         <img src="https://imagens.metricasboss.com.br/hero_summit_webp_4b75ca1525.webp" alt="Placeholder Image" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </Section>
);

export default HeroSection;
