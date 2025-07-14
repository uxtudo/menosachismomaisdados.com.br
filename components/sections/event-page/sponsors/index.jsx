import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const sponsorCategories = [
  {
    "category": "Realização",
    "logos": [
      {
        "name": "Métricas Boss",
        "logo": "https://imagens.metricasboss.com.br/Metricas_Boss_Patrocinio_fc11e3afd9.webp",
        "url": "https://metricasboss.com.br/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-2025"
      }
    ]
  },
  {
    "category": "Patrocínio Master",
    "logos": [
      {
        "name": "Minders",
        "logo": "https://imagens.metricasboss.com.br/Minders_Patrocinio_aaf8d2ae59.webp",
        "url": "https://minders.io/pt-br/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-2025"
      }
    ]
  },
  {
    "category": "Patrocínio",
    "logos": [
      {
        "name": "Reportei Sync",
        "logo": "https://imagens.metricasboss.com.br/Reportei_Patrocinio_21c5c792ce.webp",
        "url": "https://reportei.com/sync/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-"
      },
      {
        "name": "Web Estratégica",
        "logo": "https://imagens.metricasboss.com.br/Web_Estrategica_Patrocinio_0e6aa5ad6b.webp",
        "url": "https://webestrategica.com.br/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-"
      }
    ]
  },
  {
    "category": "Hospedagem oficial",
    "logos": [
      {
        "name": "Charlie",
        "logo": "https://imagens.metricasboss.com.br/Charlie_Patrocinio_f7c29f353b.webp",
        "url": "https://www.staycharlie.com.br/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-"
      }
    ]
  },
  {
    "category": "Agência de Viagem oficial",
    "logos": [
      {
        "name": "Onfly",
        "logo": "https://imagens.metricasboss.com.br/Onfly_Patrocinio_f6b463a2b3.webp",
        "url": "https://www.onfly.com.br/?utm_source=metricasboss&utm_medium=lp-summit-logos&utm_campaign=summit-2025"
      }
    ]
  }
];

const SponsorsSection = () => (
  <Section id="sponsors" className="bg-[#070C16]">
    <SectionTitle className="text-white">Nossos Patrocinadores</SectionTitle>
    <div className="mt-12 space-y-24">
      {sponsorCategories.map((category, catIndex) => (
        <div key={catIndex}>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">{category.category}:</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {category.logos.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-[180px] max-h-[80px] object-contain block mx-auto" />
                  </a>
                ) : (
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-[180px] max-h-[80px] object-contain block mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SponsorsSection;
