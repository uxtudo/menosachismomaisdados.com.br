import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Users, Zap } from "lucide-react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const features = [
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "Dashboards Intuitivos",
    description: "Visualize suas métricas mais importantes em tempo real com painéis customizados e fáceis de entender.",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Análise Preditiva",
    description: "Antecipe tendências e tome decisões proativas com nossos modelos de análise de dados avançada.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Inteligência de Cliente",
    description: "Entenda o comportamento dos seus clientes e identifique oportunidades para aumentar a retenção e o LTV.",
  },
];

const FeaturesSection = () => (
  <Section id="features" className="">
    <SectionTitle>Tudo que você precisa para crescer</SectionTitle>
    <SectionSubtitle>Nossa plataforma oferece as ferramentas certas para alavancar seu negócio.</SectionSubtitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {features.map((feature, index) => (
        <Card key={index} className="text-center">
          <CardHeader>
            <div className="mx-auto p-4 rounded-full w-fit">
              {feature.icon}
            </div>
            <CardTitle className="mt-4">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
