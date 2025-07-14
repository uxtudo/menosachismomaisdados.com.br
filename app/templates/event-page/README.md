# Template: Página de Evento

Este template é usado para criar uma landing page completa para a divulgação de eventos. Ele é construído de forma modular, facilitando a personalização de cada seção.

## Estrutura do Template

A página é composta pelas seguintes seções, na ordem em que aparecem:

1.  **Header**: Cabeçalho principal.
    *   **Localização**: `@/components/layout/Header`
2.  **Hero**: Seção de destaque inicial.
    *   **Localização**: `@/components/sections/hero`
3.  **Countdown**: Contador regressivo para o evento.
    *   **Localização**: `@/components/sections/countdown`
4.  **Agenda**: Programação do evento.
    *   **Localização**: `@/components/sections/event-page/agenda`
5.  **Speakers**: Palestrantes do evento.
    *   **Localização**: `@/components/sections/event-page/speakers`
6.  **Location**: Localização do evento.
    *   **Localização**: `@/components/sections/event-page/location`
7.  **Pricing**: Preços e planos de ingressos.
    *   **Localização**: `@/components/sections/event-page/event-pricing`
8.  **Sponsors**: Patrocinadores.
    *   **Localização**: `@/components/sections/event-page/sponsors`
9.  **FAQ**: Perguntas Frequentes.
    *   **Localização**: `@/components/sections/faq`
10. **Footer**: Rodapé principal.
    *   **Localização**: `@/components/sections/footer`

## Como Modificar

Para alterar o conteúdo de qualquer seção, navegue até o diretório do componente correspondente (listado acima) e edite o arquivo `index.jsx` (ou similar).

-   **Para alterar textos e imagens**: Abra o arquivo do componente da seção e modifique o conteúdo diretamente no JSX.
-   **Para remover uma seção**: Simplesmente comente ou remova a linha do componente correspondente no arquivo `app/templates/event-page/page.js`.
-   **Para reordenar as seções**: Altere a ordem dos componentes dentro do elemento `<main>` no arquivo `app/templates/event-page/page.js`.
