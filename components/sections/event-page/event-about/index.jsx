import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Conhecimento Aprofundado",
    description: "Palestras e workshops com os maiores especialistas do mercado.",
  },
  {
    title: "Networking de Qualidade",
    description: "Conecte-se com profissionais e empresas do setor.",
  },
  {
    title: "Insights Acionáveis",
    description: "Estratégias e ferramentas que você pode aplicar imediatamente.",
  },
];

const EventAboutSection = () => (
  <Section id="about-event">
    <SectionTitle>Sobre o Evento</SectionTitle>
    <SectionSubtitle>Descubra o que torna este evento imperdível.</SectionSubtitle>
    <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
      <Card className="p-6">
        <p className="text-lg mb-4">
          Este evento é uma oportunidade única para profissionais e entusiastas se aprofundarem nas últimas tendências e inovações em Digital Analytics. Com uma programação cuidadosamente elaborada, você terá acesso a palestras inspiradoras, workshops práticos e oportunidades de networking valiosas.
        </p>
        <p className="text-lg mb-6">
          Nosso objetivo é capacitar os participantes com conhecimento prático e insights acionáveis que podem ser aplicados imediatamente em suas carreiras e negócios. Prepare-se para um dia de aprendizado intenso e troca de experiências com os maiores nomes do setor.
        </p>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="flex-shrink-0 w-6 h-6" />
              <div>
                <h3 className="font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="h-64 flex items-center justify-center">
        <img src="https://placehold.co/640x360/E0E0E0/FFFFFF?text=Imagem+do+Evento" alt="Imagem do Evento" className="w-full h-full object-cover rounded-lg" />
      </Card>
    </div>
  </Section>
);

export default EventAboutSection;
