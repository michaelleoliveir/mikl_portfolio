import { items } from "@/data/projects"

import BlurText from "../library/BlurText"
import Project from "../ui/Project"

const Projects = () => {
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
                {items.map((item) => {
                    return (
                        <Project key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} link={item.link} tags={item.tags} id={0} features={item.features}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects