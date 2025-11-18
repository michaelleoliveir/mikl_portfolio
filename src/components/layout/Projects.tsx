import BlurText from "../library/BlurText"
import Project from "../ui/Project"

const Projects = () => {
    return (
        <section id='experience' className='w-full mt-20'>
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
                <Project image="laravel-project.png" title="" />
                <Project image="union-developers.png" title="" />
                <Project image="user-management.png" title="" />
                <Project image="ascone-page.png" title="" />
            </div>
        </section>
    )
}

export default Projects