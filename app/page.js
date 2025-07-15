import Linktree from "@/components/sections/linktree";
import Logo from "@/components/logo";

export default function Home() {
  const links = [
    { title: "Métricas Boss Prime", url: "https://menosachismomaisdados.com.br/metricas-boss-prime-mb/", description: "Entre na maior Comunidade de Digital Analytics da América Latina e domine as principais ferramentas do mercado!" },
    { title: "Curso de Google Analytics 4 na Prática - com M2BR Academy", url: "https://m2br.academy/cursos/presenciais/google-analytics-na-pratica/#", description: "Presencial no RJ - 21 a 30 de julho Vagas limitadas!" },
    { title: "Objeções de compra no E-commerce: Como transformar dúvidas em vendas", url: "https://shopbot.leadster.com.br/materiais/objecoes-de-compra-no-ecommerce/?utm_source=metricas_boss&utm_medium=referral&utm_campaign=objecoes_compra_ecommerce&utm_content=comarketing", description: "Baixe agora o relatório e fique por dentro!" },
    { title: "NOVIDADE: Trusty Data", url: "https://www.trustydata.io/", description: "Garanta a qualidade dos seus dados do Google Analytics 4 com uma ferramenta de auditoria automática! Confira nossos planos!" },
    { title: "Cursos Ao Vivo", url: "https://menosachismomaisdados.com.br/calendario-cursos-presenciais/" },
    { title: "Indique e Ganhe - InCompany", url: "https://forms.gle/w2s3kFYzmeaZ2uq78", description: "Preencha o formulário e concorra a prêmios (confira as regras)" },
    { title: "UTM Builder", url: "https://menosachismomaisdados.com.br/extensao/utm-builder/", description: "Conheça a Ferramenta Gratuita desenvolvida pela Métricas Boss para traqueamento de URLs" },
    { title: "Programa de Aceleração de Agências", url: "https://menosachismomaisdados.com.br/programa-de-aceleracao-de-agencias/" },
    { title: "Consultoria e Auditoria", url: "https://menosachismomaisdados.com.br/consultoria/auditoria-e-consultoria/" },
    { title: "Livro Menos Achismo, Mais Dados", url: "https://www.amazon.com.br/Menos-Achismo-Mais-Dados-transformar/dp/6556950963/", description: "por Gustavo Esteves" },
    { title: "Analytics Talks no Spotify", url: "https://open.spotify.com/show/4qP97l3OJO9vH37fWhrbB7?si=07591f037c6a452f" },
    { title: "Materiais Gratuitos", url: "https://menosachismomaisdados.com.br/material-gratuito/" },
    { title: "Blog de Web Analytics", url: "https://metricasboss.com.br/blog-de-web-analytics" },
  ];

  return (
    <main className="bg-[#1A1A1A] flex flex-col items-center justify-center min-h-screen py-2">
      <div className="py-8">
        <Logo width="140" height="40" className="text-white" src="https://imagens.metricasboss.com.br/logotipo_metricas_boss_SVG_60dc3b19b4.svg" />
      </div>
      <Linktree links={links} />
    </main>
  );
}

