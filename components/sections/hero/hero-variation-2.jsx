import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout";

const HeroVariation2 = () => (
  <Section className="pt-24 md:pt-32 text-center bg-blue-50 dark:bg-blue-900">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-blue-800 dark:text-blue-200">
      Seu Negócio, Seus Dados, Seu Sucesso.
    </h1>
    <p className="max-w-3xl mx-auto text-xl text-blue-700 dark:text-blue-300 mb-10">
      Capacite suas decisões com insights acionáveis e uma visão 360º do seu desempenho.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
        Comece Agora
      </Button>
      <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-800">
        Saiba Mais
      </Button>
    </div>
  </Section>
);

export default HeroVariation2;
