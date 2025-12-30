import { iconLibrary } from "./iconLibrary"

interface Items {
    id: number,
    image: string,
    title: string,
    link: string,
    subtitle: string,
    tags: React.ReactNode[]
}

export const items: Items[] = [
    {
        id: 1,
        image: "laravel-project.png",
        title: "CRUD Laravel",
        link: "https://github.com/michaelleoliveir/crud-laravel",
        subtitle: "Aplicação CRUD desenvolvida em Laravel, permitindo criar, visualizar, editar, deletar e pesquisar publicações por meio de uma interface simples e intuitiva.",
        tags: [iconLibrary.laravel, iconLibrary.php, iconLibrary.html, iconLibrary.css, iconLibrary.bootstrap]
    },
    {
        id: 2,
        image: "union-developers.png",
        title: "Union Developers Clone",
        link: "https://github.com/michaelleoliveir/uniondevelopers-clone",
        subtitle: "Clone do site da Union Developers, reproduzido com foco em layout, responsividade e fidelidade visual ao original.",
        tags: [iconLibrary.nextjs, iconLibrary.typescript, iconLibrary.tailwind, iconLibrary.zod]
    },
    {
        id: 3,
        image: "user-management.png",
        title: "User Management",
        link: "https://github.com/michaelleoliveir/user-management",
        subtitle: "Sistema de gerenciamento de usuários para registrar, atualizar e excluir usuários. Este projeto é ideal para quem busca implementar funcionalidades básicas de CRUD (Create, Read, Update, Delete) em uma aplicação web.",
        tags: [iconLibrary.react, iconLibrary.express, iconLibrary.mongodb, iconLibrary.cypress, iconLibrary.jest]
    },
    {
        id: 4,
        image: "ascone-page.png",
        title: "Ascone Landing Page",
        link: "https://github.com/michaelleoliveir/ascone-landing-page",
        subtitle: "Clone da landing page da Ascone Finance, seguindo fielmente o conceito visual encontrado no Dribbble e mantendo a estrutura, identidade e proposta original do design.",
        tags: [iconLibrary.react, iconLibrary.tailwind, iconLibrary.shadcn]
    }
]