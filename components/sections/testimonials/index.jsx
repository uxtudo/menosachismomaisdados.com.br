import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionTitle, SectionSubtitle } from "@/components/layout";

const testimonials = [
  {
    name: "Joana Silva",
    title: "CEO, Startup Inovadora",
    quote: "A plataforma revolucionou nossa tomada de decisão. Os dashboards são claros e os insights, poderosos. Recomendo fortemente!",
  },
  {
    name: "Carlos Pereira",
    title: "Diretor de Marketing, E-commerce X",
    quote: "Conseguimos otimizar nossas campanhas e aumentar o ROI em 30% no primeiro trimestre. Uma ferramenta indispensável.",
  },
];

const TestimonialsSection = () => (
  <Section id="testimonials">
    <SectionTitle>O que nossos clientes dizem</SectionTitle>
    <SectionSubtitle>Milhares de empresas confiam em nós para tomar decisões melhores.</SectionSubtitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center mt-4">
                {/* Placeholder for avatar */}
                <div className="w-12 h-12 rounded-full mr-4"></div>
                <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.title}</p>
                </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default TestimonialsSection;
