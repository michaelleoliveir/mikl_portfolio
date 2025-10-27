import BlurText from '../library/BlurText'

const AboutMe = () => {
    return (
        <div className='flex flex-col w-full mt-7'>

            {/* about me */}
            <div className='flex flex-row items-center'>
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
                    <p className='text-letter text-[1.1rem] font-dm-sans'>Sou Michaelle Oliveira, desenvolvedora <span className='text-highlight'>Fullstack</span> com foco em front-end. Atualmente, curso <span className='text-highlight'>pós-graduação</span> em Desenvolvimento Full Stack pela PUC Minas e atuo como desenvolvedora no Pipoca Ágil e Fulldev, colaborando em projetos que unem design, performance e propósito. Busco sempre aprender, criar e evoluir para <span className='text-highlight'>entregar soluções</span> que realmente façam diferença.</p>
                </div>
            </div>

            {/* history */}
            <div className='flex flex-row items-center mt-28'>
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
                    <p className='text-letter text-[1.1rem] font-dm-sans'>Sempre fui movida pela curiosidade e pelo desejo de entender como as coisas funcionam. Essa vontade me levou a estudar <span className='text-highlight'>Análise e Desenvolvimento de Sistemas</span> na FATEC Taubaté.
                        Desde então, venho me aprofundando na área, participando de projetos práticos e colaborativos, onde posso aplicar o que aprendo e contribuir para a construção de soluções reais.</p>
                </div>
            </div>

            {/* stack */}
            <div className='flex flex-row items-center mt-28'>
                <div className='w-[50%]'>
                    <BlurText
                        text='STACK'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
                </div>
                <div className='w-[50%]'>
                    <p className='text-letter text-[1.1rem] font-dm-sans'>No <span className='text-highlight'>front-end</span>, atuo principalmente com HTML, CSS, JavaScript, TypeScript, React, Next.js e Tailwind CSS.
                        No <span className='text-highlight'>back-end</span>, já tive contato com Node.js, PHP e Flutter, além de experiência com bancos de dados como MySQL, SQLite, MongoDB e Firebase.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe