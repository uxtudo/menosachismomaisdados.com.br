'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleCheck, Minus } from "lucide-react";
import { Section, SectionTitle } from "@/components/layout";

const pricingRules = [
  {
    title: "Pré-venda",
    endDate: new Date('2025-08-15T23:59:59'),
    nonPrimePrice: 1197,
    alunoPrice: 997,
  },
  {
    title: "1º Lote",
    startDate: new Date('2025-08-16T00:00:00'),
    endDate: new Date('2025-09-15T23:59:59'),
    nonPrimePrice: 1297,
    alunoPrice: 1097,
  },
  {
    title: "2º Lote",
    startDate: new Date('2025-09-16T00:00:00'),
    endDate: new Date('2025-09-30T23:59:59'),
    nonPrimePrice: 1397,
    alunoPrice: 1197,
  },
  {
    title: "3º Lote",
    startDate: new Date('2025-10-01T00:00:00'),
    nonPrimePrice: 1597,
    alunoPrice: 1397,
  },
];

const calculateCurrentPrices = () => {
  const today = new Date();
  let currentNonPrimePrice = 0;
  let currentAlunoPrice = 0;
  let currentTitle = "";

  for (const rule of pricingRules) {
    const startDate = rule.startDate || new Date(0); // Epoch for first rule
    const endDate = rule.endDate || new Date(8640000000000000); // Max date for last rule

    if (today >= startDate && today <= endDate) {
      currentNonPrimePrice = rule.nonPrimePrice;
      currentAlunoPrice = rule.alunoPrice;
      currentTitle = rule.title;
      break;
    }
  }

  return { currentNonPrimePrice, currentAlunoPrice, currentTitle };
};

const EventPricingSection = () => {
  const [prices, setPrices] = useState({ currentNonPrimePrice: 0, currentAlunoPrice: 0, currentTitle: "" });

  useEffect(() => {
    setPrices(calculateCurrentPrices());
  }, []);

  const eventBatches = [
    {
      type: "prime",
      title: "Ingresso Summit Presencial",
      subtitle: "", // Removido conforme solicitação
      installments: `12x de R$119,70`,
      originalPrice: ``, // Adicionado para manter a estrutura
      cashPrice: `ou R$ 1.197,00 à vista com desconto`,
      features: [
        "Acesso ao evento presencial em São Paulo",
        "Kit exclusivo do evento",
        "Acesso Às experiências e ativações das marcas parceiras",
        "Certificado de participação do Analytics Summit 2025",
        "30 dias de acesso à Plataforma da Métricas Boss Prime",
        "Acesso às gravações de todas as palestras do evento",
      ],
      buttonText: "GARANTA SEU INGRESSO",
      buttonLink: "https://pay.hotmart.com/X92101009A",
      highlight: false
    },{
      type: "prime",
      title: "Ingresso Summit Online + Métricas Boss Prime",
      subtitle: "", // Removido conforme solicitação
      originalPrice: ``, // Adicionado para manter a estrutura
      installments: `12x R$ 119,70`,
      cashPrice: `ou R$ 1.197,00 à vista com desconto`,
      features: [
        "Acesso à transmissão do evento, online e ao vivo",
        "Certificado de participação do Analytics Summit 2025",
        "Acesso por 12 meses à plataforma da Métricas Boss Prime, que inclui:",
        "- Gravação das Palestras do Analytics Summit 2024 e 2023",
        "- + de 20 cursos com certificação, incluindo o Digital Analytics do Zero, Google Analytics 4, Google Tag Manager, Looker Studio, Oratória e muitos outros",
        "- + de 300 horas de conteúdo",
        "- Material complementar",
        "- Bônus exclusivos",
        "- Acesso à Comunidade de Alunos",
        "- Lives exclusivas",
        "- Descontos exclusivos",
      ],
      buttonText: "GARANTA SEU ACESSO",
      buttonLink: "https://pay.hotmart.com/E89482276V",
      highlight: true,
    }];

  return (
    <Section id="event-pricing" className='bg-[#070C16]'>
      <SectionTitle className="text-white">Garanta seu ingresso!</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 items-center">
        {/* Card 1 */}
        <div className={`relative bg-[#070C16] p-8 rounded-l-lg border-l border-t border-b flex flex-col h-full ${eventBatches[0].highlight ? "border-2 border-gray-700" : ""}`} style={{ borderColor: '#9A75D5' }}>
          <Badge className="mb-4 text-white px-4 py-2 text-base" style={{ background: '#4B5563' }}>Pré-Evento</Badge>
          {/* Área para faixa de destaque superior */}
          
          {/* Seção para título e subtítulo */}
          <div className="text-left mb-4 mt-8">
            <h3 className="text-white text-2xl font-bold">{eventBatches[0].title}</h3>
            <p className="text-gray-400">{eventBatches[0].subtitle}</p>
          </div>
          {/* Seção de preço */}
          <div className="text-left mb-6">
            {eventBatches[0].type === "prime" && (
              <>
                {eventBatches[0].originalPrice && <p className="text-sm line-through text-gray-400">{eventBatches[0].originalPrice}</p>}
                <span className="text-4xl font-bold text-white">{eventBatches[0].installments}</span>
                {eventBatches[0].cashPrice && <p className="text-sm text-gray-400">{eventBatches[0].cashPrice}</p>}
              </>
            )}
          </div>
          {/* Área para lista de recursos */}
          <ul className="text-white space-y-2 mb-6 flex-grow">
            {eventBatches[0].features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <CircleCheck className="mr-2 h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
          {/* Área para botão de ação */}
          <div className="text-left mt-auto">
            <Button className="w-full" asChild={eventBatches[0].buttonLink ? true : false} variant="success">
              {eventBatches[0].buttonLink ? <a href={eventBatches[0].buttonLink}>{eventBatches[0].buttonText}</a> : eventBatches[0].buttonText}
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`relative bg-[#070C16] rounded-lg px-8 py-10 ml-[-2px] z-10 flex flex-col h-full ${eventBatches[1].highlight ? "border-3 border-[#00BAFF]" : ""}`}>
          <Badge className="mb-4 text-white px-4 py-2 text-base" style={{ background: 'linear-gradient(to right, #0052D0, #00BAFF)' }}>Oportunidade Única</Badge>
          {/* Seção para título e subtítulo */}
          <div className="text-left mb-4 mt-8">
            <h3 className="text-white text-2xl font-bold">{eventBatches[1].title}</h3>
            <p className="text-gray-400">{eventBatches[1].subtitle}</p>
          </div>
          {/* Seção de preço */}
          <div className="text-left mb-6">
            {eventBatches[1].type === "prime" && (
              <>
                {eventBatches[1].originalPrice && <p className="text-sm line-through text-gray-400">{eventBatches[1].originalPrice}</p>}
                <span className="text-4xl font-bold text-white">{eventBatches[1].installments}</span>
                {eventBatches[1].cashPrice && <p className="text-sm text-gray-400">{eventBatches[1].cashPrice}</p>}
              </>
            )}
          </div>
          {/* Área para lista de recursos */}
          <ul className="text-white space-y-2 mb-6 flex-grow">
            {eventBatches[1].features.map((feature, featureIndex) => {
              const isSubItem = feature.startsWith("- ");
              return (
                <li key={featureIndex} className={`flex items-center ${isSubItem ? "font-light" : ""}`}>
                  {isSubItem ? <Minus className="mr-2 h-4 w-4" /> : <CircleCheck className="mr-2 h-4 w-4" />}
                  {isSubItem ? feature.substring(2) : feature}
                </li>
              );
            })}
          </ul>
          {/* Área para botão de ação */}
          <div className="text-left mt-auto">
            <Button className="w-full" asChild={eventBatches[1].buttonLink ? true : false} variant="success">
              {eventBatches[1].buttonLink ? <a href={eventBatches[1].buttonLink}>{eventBatches[1].buttonText}</a> : eventBatches[1].buttonText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventPricingSection;