import { iconLibrary } from "./iconLibrary"

export interface Items {
    id: number,
    image: string,
    title: string,
    link: string,
    features: string[],
    subtitle: string,
    tags: React.ReactNode[]
}

export const items: Items[] = [
    {
        id: 1,
        image: "laravel-project.png",
        title: "CRUD Laravel",
        link: "https://github.com/michaelleoliveir/crud-laravel",
        features: [
            'Sistema de Busca com filtro dinâmico para localização de registros por título.',
            'Layout moderno e adaptável desenvolvido com Bootstrap.',
            'Uso de Migrations para estruturação automatizada do banco.',
            'Proteção nativa contra ataques CSRF e validação de formulários.'
        ],
        subtitle: "Aplicação CRUD desenvolvida em Laravel, permitindo criar, visualizar, editar, deletar e pesquisar publicações por meio de uma interface simples e intuitiva.",
        tags: [iconLibrary.Laravel, iconLibrary.PHP, iconLibrary.HTML, iconLibrary.CSS, iconLibrary.Bootstrap]
    },
    {
        id: 2,
        image: "union-developers.png",
        title: "Union Developers Clone",
        link: "https://github.com/michaelleoliveir/uniondevelopers-clone",
        features: [
            'Estrutura organizada em componentes reutilizáveis para facilitar a manutenção.',
            'Configurado para deploy contínuo na plataforma Vercel.',
            'Uso de interfaces e tipos para garantir que as props sejam consistentes.',
            'Implementação do componente next/image para carregamento otimizado de imagens.'
        ],
        subtitle: "Clone do site da Union Developers, reproduzido com foco em layout, responsividade e fidelidade visual ao original.",
        tags: [iconLibrary.NextJS, iconLibrary.TypeScript, iconLibrary.Tailwind, iconLibrary.Zod]
    },
    {
        id: 3,
        image: "user-management.png",
        title: "User Management",
        link: "https://github.com/michaelleoliveir/user-management",
        features: [
            'Testes E2E, Unitários e de Integração.',
            'Estruturação de objetos de usuário com TypeScript.',
            'API RESTful com Express.js para operações CRUD.',
        ],
        subtitle: "Sistema de gerenciamento de usuários para registrar, atualizar e excluir usuários. Este projeto é ideal para quem busca implementar funcionalidades básicas de CRUD (Create, Read, Update, Delete) em uma aplicação web.",
        tags: [iconLibrary.React, iconLibrary.Express, iconLibrary.MongoDB, iconLibrary.Cypress, iconLibrary.Jest]
    },
    {
        id: 4,
        image: "ascone-page.png",
        title: "Ascone Landing Page",
        link: "https://github.com/michaelleoliveir/ascone-landing-page",
        features: [
            'Landing page otimizada com foco em performance e SEO.',
            'Transformação de um design complexo em código funcional.',
            'Divisão da página em seções e componentes independentes'
        ],
        subtitle: "Clone da landing page da Ascone Finance, seguindo fielmente o conceito visual encontrado no Dribbble e mantendo a estrutura, identidade e proposta original do design.",
        tags: [iconLibrary.React, iconLibrary.Tailwind, iconLibrary.Shadcn]
    }
]