import Logo from "@/components/logo";

const Footer = () => (
    <footer className="border-t">
        <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Logo width="181" height="32" className="mr-2" />
            </div>
            <div className="text-sm">
                &copy; 2025. Todos os direitos reservados.
            </div>
        </div>
    </footer>
)

export default Footer;
