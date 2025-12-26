import BlurText from "../library/BlurText"
import Project from "../ui/Project"

const Projects = () => {
    const itens = [
        {
            id: 1, 
            image: "laravel-project.png",
            title: "CRUD Laravel",
            link: "https://github.com/michaelleoliveir/crud-laravel",
            subtitle: "Aplicação CRUD desenvolvida em Laravel, permitindo criar, visualizar, editar, deletar e pesquisar publicações por meio de uma interface simples e intuitiva.",
            tags: ['Laravel', 'PHP', 'Blade', 'HTML', 'CSS', 'Bootstrap']
        },
        {
            id: 2,
            image: "union-developers.png",
            title: "Union Developers Clone",
            link: "https://github.com/michaelleoliveir/uniondevelopers-clone",
            subtitle: "Clone do site da Union Developers, reproduzido com foco em layout, responsividade e fidelidade visual ao original.",
            tags: ['NextJS', 'TypeScript', 'Tailwind', 'Lucide', 'Zod']
        },
        {
            id: 3,
            image: "user-management.png",
            title: "User Management",
            link: "https://github.com/michaelleoliveir/user-management",
            subtitle: "Sistema de gerenciamento de usuários para registrar, atualizar e excluir usuários. Este projeto é ideal para quem busca implementar funcionalidades básicas de CRUD (Create, Read, Update, Delete) em uma aplicação web.",
            tags: ['React', 'JavaScript', 'Shadcn', 'Express', 'MongoDB', 'Cypress', 'Jest']
        },
        {
            id: 4,
            image: "ascone-page.png",
            title: "Ascone Landing Page",
            link: "https://github.com/michaelleoliveir/ascone-landing-page",
            subtitle: "Clone da landing page da Ascone Finance, seguindo fielmente o conceito visual encontrado no Dribbble e mantendo a estrutura, identidade e proposta original do design.",
            tags: ['React', 'JavaScript', 'Tailwind', 'Shadcn']
        }
    ]

    return (
        <section id='projects' className='w-full mt-20'>
            <div className='flex flex-row items-center'>
                <div className='w-full'>
                    <BlurText
                        text='PROJETOS'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
                </div>
            </div>

            <div className='mt-10'>
                {itens.map((item) => {
                    return (
                        <Project key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} link={item.link} tags={item.tags}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects