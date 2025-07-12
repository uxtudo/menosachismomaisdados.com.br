import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout";
import LeadMagnetFormModal from "@/components/sections/lead-magnet-page-2/lead-magnet-form-modal";

const LeadMagnetHeroSection2 = () => (
  <Section className="text-center md:text-left bg-[#161616] text-gray-200">
    <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
      <div className="space-y-6">
        <Badge className="mb-4 bg-orange-100 bg-opacity-50 border-dashed border-orange-500 px-4 py-2 text-white">Baixe Gratuitamente</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Kit Sobrevivência para Google Analytics 4
        </h1>
        <p className="max-w-xl text-lg">
          Tudo o que você precisa para dar seus primeiros passos na ferramenta mais importante de Digital Analytics.
        </p>
        <LeadMagnetFormModal />
      </div>
      <div className="flex items-center justify-center">
        <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/08/50-Profissionais-de-Metricas-e-Analytics-para-Voce-seguir-em-2024_-1.webp" alt="Imagem do Material" className="hidden md:block w-[650px] h-auto rounded-lg" />
      </div>
    </div>
  </Section>
);

export default LeadMagnetHeroSection2;
