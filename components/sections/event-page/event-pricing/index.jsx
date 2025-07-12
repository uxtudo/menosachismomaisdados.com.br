'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
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
      type: "dynamic-non-prime",
      title: prices.currentTitle,
      subtitle: "Ingresso Analytics Summit presencial",
      price: `R$ ${prices.currentNonPrimePrice.toFixed(2).replace('.', ',')}`,
      status: "Disponível",
      features: [
        "Acesso a todas as palestras",
        "Certificado de conclusão do Analytics Summit 2024",
      ],
      buttonText: "COMPRAR",
      buttonLink: "#",
      highlight: false,
      headerImage: null,
    },
    {
      type: "prime",
      title: "Analytics Summit presencial + MB Prime",
      subtitle: "",
      originalPrice: `De R$ ${(prices.currentAlunoPrice * 1.5).toFixed(2).replace('.', ',')}`,
      installments: `12x R$ ${(prices.currentAlunoPrice / 10).toFixed(2).replace('.', ',')}`,
      cashPrice: `ou R${prices.currentAlunoPrice.toFixed(2).replace('.', ',')} à vista com desconto`,
      features: [
        "Acesso ao Analytics Summit 2024 (evento online e ao vivo)",
        "Certificado de conclusão do Analytics Summit 2024",
        "Acesso por 12 meses à plataforma da Métricas Boss Prime, que inclui:",
        "Gravação das Palestras do Analytics Summit 2024 e 2023",
        "+ de 20 cursos com certificação, incluindo o Digital Analytics do Zero, Google Analytics 4, Google Tag Manager, Looker Studio, Oratória e muitos outros.",
        "+ de 300 horas de conteúdo",
        "Acesso à Comunidade de Alunos",
        "Lives exclusivas",
        "Descontos Exclusivos",
      ],
      buttonText: "ASSINAR",
      buttonLink: "#",
      highlight: true,
      headerImage: "https://analyticssummit.com.br/wp-content/uploads/2024/09/melhor_oportunidade-3.webp",
    },
  ];

  return (
    <Section id="event-pricing" className='bg-[#070C16]'>
      <SectionTitle className="text-white">Garanta seu ingresso!</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-12 justify-center items-center">
        {eventBatches.map((batch, index) => (
          <div key={index} className={`relative ${batch.type === "standard" ? "h-fit" : ""}`}>
            {batch.headerImage && (
              <img src={batch.headerImage} alt={batch.title} className="absolute z-9 top-30 left-1/2 -translate-x-1/2 w-[443px] h-auto" />
            )}
            <Card className={`flex flex-col max-w-sm mx-auto relative z-8 mt-[100px] ${batch.highlight ? "border-2 border-black dark:border-white lg:scale-[1.05] drop-shadow-xl shadow-black/10 dark:shadow-white/10" : ""}`}>
              <CardHeader className="text-center mt-20 p-0">
                <div className="p-6">
                  <CardTitle className="text-2xl font-bold">{batch.title}</CardTitle>
                  {batch.type === "dynamic-non-prime" && (
                    <CardDescription className="mt-2">
                      <p className="text-lg">{batch.subtitle}</p>
                      <span className="text-4xl font-bold">{batch.price}</span>
                      <p className="text-sm">{batch.status}</p>
                    </CardDescription>
                  )}
                  {batch.type === "prime" && (
                    <CardDescription className="mt-2">
                      <p className="text-lg font-bold text-[#FB900B]">{batch.subtitle}</p>
                      <p className="text-sm line-through">{batch.originalPrice}</p>
                      <span className="text-4xl font-bold">{batch.installments}</span>
                      <p className="text-sm">{batch.cashPrice}</p>
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow px-6">
                <ul className="space-y-2">
                  {batch.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CircleCheck className="mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button className="w-full" variant={batch.status === "ESGOTADO" ? "outline" : "default"} disabled={batch.status === "ESGOTADO"} asChild={batch.buttonLink ? true : false}>
                  {batch.buttonLink ? <a href={batch.buttonLink}>{batch.buttonText}</a> : batch.buttonText}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EventPricingSection;