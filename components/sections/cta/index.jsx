import { Button } from "@/components/ui/button";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const CtaSection = () => (
  <Section id="cta" className="">
    <div className="text-center">
      <SectionTitle>Pronto para transformar seus dados em resultados?</SectionTitle>
      <SectionSubtitle>Agende uma demonstração gratuita e veja como podemos ajudar seu negócio a crescer.</SectionSubtitle>
      <Button size="lg" className="mt-8">
        Fale com um especialista
      </Button>
    </div>
  </Section>
);

export default CtaSection;
