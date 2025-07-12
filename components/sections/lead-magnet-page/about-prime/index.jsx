import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";
import { Button } from "@/components/ui/button";

const AboutPrimeSection = () => (
  <Section id="about-prime">
    <SectionTitle>O que é a Métricas Boss Prime</SectionTitle>
    <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/01/metricas-boss-prime-plataforma-de-educacao.png" alt="Métricas Boss Prime" className="w-full h-auto rounded-lg" />
      </div>
      <div>
        <p className="text-lg mb-4">
          A Métricas Boss Prime é o primeiro e maior streaming para profissionais de Analytics do país. A plataforma conta com mais de 20 cursos completos, ministrados com a mesma metodologia que a Métricas Boss aplica nos mais de 3.000 projetos de consultoria já realizados nos últimos 13 anos.
        </p>
        <p className="text-lg mb-4">
          São mais de 200 horas de conteúdos, que miram na revolução da forma que empresas e profissionais se planejam e agem: nossa missão é acabar com o achismo e tomar decisões baseadas em dados.
        </p>
        <p className="text-lg">
          Os alunos Prime contam com fóruns de discussão, rede de networking, descontos em ferramentas de parceiros, palestras, entrevistas e materiais complementares exclusivos, numa plataforma em constante atualização para acelerar o desenvolvimento e impulsionar suas carreiras.
          Já pensou em ter acesso a tudo isso?
        </p>
        <Button className="mt-4 hover:scale-105 transition-all duration-300" asChild>
          <a href="https://menosachismomaisdados.com.br/metricas-boss-prime-mb" target="_blank" rel="noopener noreferrer">
            Conheça a Métricas Boss Prime
          </a>
        </Button>
      </div>
    </div>
  </Section>
);

export default AboutPrimeSection;
