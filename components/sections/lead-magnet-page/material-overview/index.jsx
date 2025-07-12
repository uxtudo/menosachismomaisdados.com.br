import { Section, SectionTitle } from "@/components/layout";
import { Separator } from "@/components/ui/separator";

const MaterialOverviewSection = () => (
  <Section id="material-overview" className="bg-[#161616] text-gray-200">
    <div className="text-center">
      <SectionTitle>O que você vai encontrar nesse material:</SectionTitle>
      <Separator className="my-8" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/02/Vocabulario-do-Google-Analytics-4-1.png" alt="Material Image 1" className="w-full h-auto rounded-lg" />
      <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/02/Tudo-sobre-o-Google-Analytics-4.png" alt="Material Image 2" className="w-full h-auto rounded-lg" />
      <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/02/Diferenca-do-GAU-X-GA4.png" alt="Material Image 3" className="w-full h-auto rounded-lg" />
      <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/02/Dicas-para-vencer-no-Google-Analytics-4.png" alt="Material Image 4" className="w-full h-auto rounded-lg" />
    </div>
  </Section>
);

export default MaterialOverviewSection;
