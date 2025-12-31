import Image from 'next/image'
import AosWrapper from '../ui/AosWrapper'

const AboutMe = () => {
    return (
        <AosWrapper>
            <div id='about' className='flex flex-col w-full mt-20'>
                {/* about me */}
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row justify-center items-center gap-30 mt-30 mb-25' data-aos="fade-down" data-aos-delay={90} data-aos-duration="800">
                        <div className='relative shrink-0 flex items-center justify-center'>
                            <div className="absolute w-[120%] h-[120%] border-t-2 border-l-2 border-red-400/20 rounded-full animate-spin [animation-duration:8s]"></div>
                            <div className='absolute w-[135%] h-[135%] border-b-2 border-r-2 border-neon/20 rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse]'></div>
                            <svg className="absolute w-[150%] h-[150%] animate-spin [animation-duration:20s] opacity-30" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    fill="none"
                                    stroke="currentColor"
                                    className="text-red-500"
                                    strokeWidth="0.5"
                                    strokeDasharray="1 4"
                                />
                            </svg>
                            <div className='relative group flex items-center justify-center'>
                                <div className='absolute -inset-2 bg-linear-to-r from-red-600 to-orange-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-1000'></div>
                                <div className='relative w-80 h-80 rounded-full overflow-hidden border-3 border-letter shadow-2xl z-10 bg-slate-100'>
                                    <Image
                                        src={`/profile.jpeg`}
                                        fill
                                        priority
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={'Foto de perfil'} />
                                </div>
                            </div>
                        </div>

                        <div className='w-[50%]' data-aos="fade-down" data-aos-delay={100} data-aos-duration="800">
                            <p className='text-letter text-[1.2rem] font-dm-sans'>Sou Michaelle Oliveira, <span className='text-highlight'>tecnóloga</span> em Análise e Desenvolvimento de Sistemas e desenvolvedora <span className='text-highlight'>Fullstack</span> com foco em front-end. Atualmente, curso <span className='text-highlight'>pós-graduação</span> em Desenvolvimento Full Stack pela PUC Minas e atuo como desenvolvedora na Prontax e Fulldev, colaborando em projetos que unem design, performance e propósito. Busco sempre aprender, criar e evoluir para <span className='text-highlight'>entregar soluções</span> que realmente façam diferença.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AosWrapper>
    )
}

export default AboutMe