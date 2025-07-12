import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const sponsorCategories = [
  {
    category: "Realização",
    logos: [
      {
        name: "Métricas Boss",
        logo: "https://analyticssummit.com.br/wp-content/uploads/2024/09/logotipo_metricas_bos-2x.webp"
      }
    ]
  },
  {
    category: "Patrocínio",
    logos: [
      {
        name: "Reportei Sync",
        logo: "https://analyticssummit.com.br/wp-content/uploads/2024/08/reportei_sync-1024x317.webp"
      },
      {
        name: "Minders",
        logo: "https://analyticssummit.com.br/wp-content/uploads/2024/08/minders-1024x318.webp"
      }
    ]
  },
  {
    category: "Café oficial",
    logos: [
      {
        name: "Coffee Mais",
        logo: "https://analyticssummit.com.br/wp-content/uploads/2023/07/Logotipo_Coffee_Mais_Branco-1024x630.webp"
      }
    ]
  }
];

const SponsorsSection = () => (
  <Section id="sponsors" className="bg-[#070C16]">
    <SectionTitle className="text-white">Nossos Patrocinadores</SectionTitle>
    <div className="mt-12 space-y-12">
      {sponsorCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">{category.category}:</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {category.logos.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={sponsor.logo} alt={sponsor.name} className="max-w-[180px] max-h-[80px] object-contain block mx-auto" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SponsorsSection;
