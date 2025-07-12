import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout";

const LeadMagnetHeroSection = () => (
  <Section className="text-center md:text-left bg-[#161616] text-gray-200">
    <div className="grid md:grid-cols-10 gap-12 items-center justify-items-center">
      <div className="space-y-6 md:col-span-4">
        <Badge className="mb-4 bg-orange-100 bg-opacity-50 border-dashed border-orange-500 px-4 py-2 text-white">Baixe Gratuitamente</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Kit Sobrevivência para Google Analytics 4
        </h1>
        <p className="max-w-xl text-lg">
          Tudo o que você precisa para dar seus primeiros passos na ferramenta mais importante de Digital Analytics.
        </p>
        <form className="space-y-4">
              <div className="space-y-2">
                <Input id="name" placeholder="Nome" />
              </div>
              <div className="space-y-2">
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Com o que você trabalha?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analise-dados">Análise de dados/BI</SelectItem>
                    <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                    <SelectItem value="midia">Mídia/Gestão de Tráfego</SelectItem>
                    <SelectItem value="e-commerce">E-commerce</SelectItem>
                    <SelectItem value="produto">Produto (PO - UX - Outros)</SelectItem>
                    <SelectItem value="desenvolvedor">Desenvolvedor/TI</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Aceito receber emails da Métricas Boss. Você pode mudar de ideia a qualquer momento, clicando no descadastre-se presente em todos os emails.
                </Label>
              </div>
              <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600 text-lg py-3">
                <Download className="mr-2 h-5 w-5" /> Faça o download do kit
              </Button>
            </form>
      </div>
      <div className="md:col-span-6 flex items-center justify-center">
        <img src="https://menosachismomaisdados.com.br/wp-content/uploads/2024/08/50-Profissionais-de-Metricas-e-Analytics-para-Voce-seguir-em-2024_-1.webp" alt="Imagem do Material" className="hidden md:block w-[650px] h-auto rounded-lg" />
      </div>
    </div>
  </Section>
);

export default LeadMagnetHeroSection;
