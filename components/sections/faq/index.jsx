import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const faqItems = [
  {
    question: "O que é 'Menos Achismo, Mais Dados'?",
    answer: "É uma plataforma que transforma dados brutos em insights acionáveis, ajudando empresas a tomar decisões baseadas em fatos, não em intuição.",
  },
  {
    question: "Como a plataforma pode ajudar meu negócio?",
    answer: "Através de dashboards intuitivos, análise preditiva e inteligência de cliente, você otimiza campanhas, aumenta o ROI e entende melhor o comportamento do consumidor.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar?",
    answer: "Não! A plataforma foi desenvolvida para ser intuitiva e fácil de usar, mesmo para quem não tem conhecimento técnico avançado em análise de dados.",
  },
  {
    question: "Qual o custo da plataforma?",
    answer: "Oferecemos diferentes planos para atender às necessidades de cada negócio. Entre em contato para agendar uma demonstração e conhecer nossas opções.",
  },
];

const FaqSection = () => (
  <Section id="faq">
    <SectionTitle>Perguntas Frequentes</SectionTitle>
    <SectionSubtitle>Encontre respostas para as dúvidas mais comuns sobre nossa plataforma.</SectionSubtitle>
    <div className="max-w-3xl mx-auto mt-12">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

export default FaqSection;
