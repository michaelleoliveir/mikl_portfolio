import Image from 'next/image'
import Link from 'next/link'

import AosWrapper from '../ui/AosWrapper'

import { FaArrowRight } from 'react-icons/fa'
import { MdDownload } from 'react-icons/md'

const AboutMe = () => {
    return (
        <AosWrapper>
            <div id='about' className='flex flex-col w-full mt-6 md:mt-20'>

                <div className='flex flex-col md:flex-row justify-center items-center gap-20 md:gap-30 mt-30 mb-25' data-aos="fade-down" data-aos-delay={90} data-aos-duration="800">
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
                            <div className='relative w-50 md:w-80 h-50 md:h-80 rounded-full overflow-hidden border-3 border-letter shadow-2xl z-10 bg-slate-100'>
                                <Image
                                    src={`/profile.jpeg`}
                                    fill
                                    priority
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt={'Foto de perfil'} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[80%] md:w-[50%] flex flex-col'>
                        <div data-aos="fade-down" data-aos-delay={100} data-aos-duration="800">
                            <p className='text-center justify-evenly md:text-start text-letter text-[1rem] md:text-[1.2rem] font-dm-sans'>Sou Michaelle Oliveira, <span className='text-highlight'>tecnóloga</span> em Análise e Desenvolvimento de Sistemas e desenvolvedora <span className='text-highlight'>Fullstack</span> com foco em front-end. Atualmente, curso <span className='text-highlight'>pós-graduação</span> em Desenvolvimento Full Stack pela PUC Minas e atuo como desenvolvedora na Prontax e Fulldev, colaborando em projetos que unem design, performance e propósito. Busco sempre aprender, criar e evoluir para <span className='text-highlight'>entregar soluções</span> que realmente façam diferença.</p>
                        </div>

                        <div className='mt-5 flex flex-col md:flex-row items-center md:justify-start gap-2 md:gap-4'>
                            <a href="/curriculo.pdf" target='_blank' className='cursor-pointer'>
                                <button className='cursor-pointer w-full max-w-64 md:w-auto justify-center text-[0.7rem] md:text-[1rem] font-dm-sans pr-5 pl-2 py-2 bg-highlight-darker rounded-full flex items-center gap-3 text-letter transition-all hover:shadow-[0_0_25px_rgba(66,00,00,1.3)]'>
                                    <span className='bg-letter text-highlight-darker rounded-full w-7 md:w-8 h-7 md:h-8 flex items-center justify-center'><MdDownload size={18} />
                                    </span>
                                        DOWNLOAD CV
                                </button>
                            </a>
                            <Link
                                className='w-full max-w-64 md:w-auto justify-center text-[0.7rem] md:text-[1rem] font-dm-sans pr-5 pl-2 py-2 bg-highlight-darker rounded-full flex items-center gap-3 text-letter transition-all hover:shadow-[0_0_25px_rgba(66,00,00,1.3)]'
                                href='/contact'
                            >
                                <span className="bg-letter text-highlight-darker rounded-full w-7 md:w-8 h-7 md:h-8 flex items-center justify-center">
                                    <FaArrowRight size={14} />
                                </span>
                                ENTRE EM CONTATO
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AosWrapper>
    )
}

export default AboutMe