import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Linktree = ({ links }) => {
  const featuredLink = links[0];
  const otherLinks = links.slice(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card className="w-full max-w-md p-6 space-y-4 bg-transparent border-none shadow-none">
        {featuredLink && (
          <a href={featuredLink.url} target="_blank" rel="noopener noreferrer">
            <Card className="w-full p-0 overflow-hidden">
              <img
                src="https://menosachismomaisdados.com.br/wp-content/uploads/2023/12/Card-plataforma-prime.png"
                alt={featuredLink.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-orange-500">{featuredLink.title}</h2>
                {featuredLink.description && (
                  <p className="text-sm text-gray-600 mt-1">{featuredLink.description}</p>
                )}
              </div>
            </Card>
          </a>
        )}

        {otherLinks.map((link, index) => (
          <Button key={index} asChild className="w-full" variant="linktreeItem">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex-col">
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-white">{link.title}</h2>
                {featuredLink.description && (
                  <p className="text-sm text-gray-600 mt-1 text-white">{link.description}</p>
                )}
              </div>
            </a>
          </Button>
        ))}
      </Card>
    </div>
  );
};

export default Linktree;