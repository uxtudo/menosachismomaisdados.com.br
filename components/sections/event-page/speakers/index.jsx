import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const speakers = [
  {
    name: "Bernardo Marotta",
    title: "CMO",
    linkedin: "https://www.linkedin.com/in/bernardo-marotta-84172925/",
    image: "https://analyticssummit.com.br/wp-content/uploads/2024/09/bernardo_marotta.webp",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/01_Cogna.webp"
  },
  {
    name: "Brenna Carvalho",
    title: "Coordenadora de Mídia Sênior",
    linkedin: "https://www.linkedin.com/in/brennacarvalho/",
    image: "https://analyticssummit.com.br/wp-content/uploads/2024/09/brenna_carvalho.webp",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/10_Personare.webp"
  },
  {
    name: "Carolina Nicolini",
    title: "Brazil Sales Lead",
    linkedin: "https://www.linkedin.com/in/nicolini/",
    image: "https://analyticssummit.com.br/wp-content/uploads/2024/09/carol_nicolina-2.webp",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/03_Minders.webp"
  },
  {
    name: "Claudio Bonel",
    title: "Cientista de Dados",
    linkedin: "https://www.linkedin.com/in/bonel/",
    image: "https://analyticssummit.com.br/wp-content/uploads/2024/09/claudio_bonel.webp",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/quali_quanti-1.webp"
  },
  {
    name: "Gustavo Esteves",
    title: "Tsubasa na Métricas Boss",
    linkedin: null,
    image: "https://analyticssummit.com.br/wp-content/uploads/2023/05/gustavo_esteves.jpg",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/logotipo_metricas_boss.webp"
  },
  {
    name: "Lucas Pedote",
    title: "Head & Heart of Data & AI",
    linkedin: "https://www.linkedin.com/in/lucaspedote/",
    image: "https://analyticssummit.com.br/wp-content/uploads/2024/09/lucas_pedote.webp",
    companyImage: "https://analyticssummit.com.br/wp-content/uploads/elementor/thumbs/05_Ifood-qu0lhspqrle7ozoboxhhih2mvkghmzv59mqkih4934.webp"
  }
];

const SpeakersSection = () => (
  <Section id="speakers" className="bg-[#070c16]">
    <SectionTitle className="text-white">Nossos Palestrantes</SectionTitle>
    <SectionSubtitle className="text-white">Conheça os especialistas que compartilharão seus conhecimentos no evento.</SectionSubtitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
      {speakers.map((speaker, index) => (
        <a key={index} href={speaker.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="block">
          <Card className="text-center bg-[#070c16] py-8 pt-0 text-white transition-all duration-300 hover:bg-[#10151f] hover:scale-105 cursor-pointer">
            <CardHeader className="flex flex-col items-center p-0">
              <img src={speaker.image} alt={speaker.name} className="w-full h-80 object-cover rounded-t-lg" />
              <div className="px-6 py-6 pb-6 w-full">
                {speaker.companyImage && (
                  <img src={speaker.companyImage} alt="Company Logo" className="h-8 object-contain mb-2 mx-auto" />
                )}
                <div className="flex items-center justify-center gap-2">
                  <CardTitle className="text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{speaker.name}</CardTitle>
                  {speaker.linkedin && (
                    <span className="text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </span>
                  )}
                </div>
                <p className="text-md text-white whitespace-nowrap overflow-hidden text-ellipsis">{speaker.title}</p>
              </div>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  </Section>
);

export default SpeakersSection;
