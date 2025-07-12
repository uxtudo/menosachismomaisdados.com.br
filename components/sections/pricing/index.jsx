import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const pricingPlans = [
  {
    title: "Básico",
    price: "R$ 99",
    frequency: "/mês",
    features: [
      "5 Dashboards Personalizados",
      "Análise de Dados Básica",
      "Suporte por Email",
      "Relatórios Mensais",
    ],
    buttonText: "Começar Agora",
    highlight: false,
  },
  {
    title: "Profissional",
    price: "R$ 299",
    frequency: "/mês",
    features: [
      "Todos os recursos do Básico",
      "15 Dashboards Personalizados",
      "Análise Preditiva",
      "Suporte Prioritário",
      "Relatórios Semanais",
      "Integração com 3 Ferramentas",
    ],
    buttonText: "Mais Popular",
    highlight: true,
  },
  {
    title: "Empresarial",
    price: "R$ 799",
    frequency: "/mês",
    features: [
      "Todos os recursos do Profissional",
      "Dashboards Ilimitados",
      "Inteligência de Cliente Avançada",
      "Gerente de Conta Dedicado",
      "Relatórios Diários",
      "Integração Ilimitada",
      "Treinamento Personalizado",
    ],
    buttonText: "Fale Conosco",
    highlight: false,
  },
];

const PricingSection = () => (
  <Section id="pricing">
    <SectionTitle>Planos de Preços Flexíveis</SectionTitle>
    <SectionSubtitle>Escolha o plano que melhor se adapta às necessidades do seu negócio.</SectionSubtitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className={`flex flex-col ${plan.highlight ? "border-2 border-primary min-h-[400px] py-8 px-6" : ""}`}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
            <CardDescription className="mt-2">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.frequency}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
              {plan.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </Section>
);

export default PricingSection;
