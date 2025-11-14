import BlurText from "../library/BlurText"

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

            <div className='grid grid-cols-2 gap-10 mt-10'>
                
            </div>
        </section>
    )
}

export default Projects