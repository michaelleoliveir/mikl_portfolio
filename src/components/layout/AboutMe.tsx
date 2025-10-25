import BlurText from '../library/BlurText'

const AboutMe = () => {
    return (
        <div className='flex flex-col w-full mt-7'>

            {/* about me */}
            <div className='flex flex-row'>
                <div className='w-[50%]'>
                    <BlurText
                        text='SOBRE MIM'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
                </div>
                <div className='w-[50%]'>
                    <p className='text-letter text-[1.2rem] font-dm-sans'>Sou Michaelle Oliveira, desenvolvedora <span className='text-highlight'>Fullstack</span> com foco em front-end. Tenho paixão por transformar ideias em experiências digitais acessíveis, modernas e intuitivas. Atualmente, curso <span className='text-highlight'>pós-graduação</span> em Desenvolvimento Full Stack pela PUC Minas e atuo como desenvolvedora no Pipoca Ágil e Fulldev, colaborando em projetos que unem design, performance e propósito. Acredito que tecnologia é uma forma de impacto social — e busco sempre aprender, criar e evoluir para <span className='text-highlight'>entregar soluções</span> que realmente façam diferença.</p>
                </div>
            </div>

            {/* history */}
            <div className='flex flex-row mt-28'>
                <div className='w-[50%]'>
                    <BlurText
                        text='HISTÓRIA'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
                </div>
                <div className='w-[50%]'>
                    <p className='text-letter text-[1.2rem] font-dm-sans'>Sou Michaelle Oliveira, desenvolvedora <span className='text-highlight'>Fullstack</span> com foco em front-end. Tenho paixão por transformar ideias em experiências digitais acessíveis, modernas e intuitivas. Atualmente, curso <span className='text-highlight'>pós-graduação</span> em Desenvolvimento Full Stack pela PUC Minas e atuo como desenvolvedora no Pipoca Ágil e Fulldev, colaborando em projetos que unem design, performance e propósito. Acredito que tecnologia é uma forma de impacto social — e busco sempre aprender, criar e evoluir para <span className='text-highlight'>entregar soluções</span> que realmente façam diferença.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe