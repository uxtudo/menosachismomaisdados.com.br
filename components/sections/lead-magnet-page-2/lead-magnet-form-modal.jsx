import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const LeadMagnetFormModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="w-full bg-green-500 text-white hover:bg-green-600 text-lg py-3">
        Baixe seu Kit Gratuito
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-screen-md">
      <DialogHeader>
        <DialogTitle>Baixe seu Kit Gratuito</DialogTitle>
        <DialogDescription>
          Preencha o formulário abaixo para ter acesso ao material.
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-4 py-4">
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
          Faça o download do kit
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);

export default LeadMagnetFormModal;
