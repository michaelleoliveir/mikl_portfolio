import { experience } from '@/data/experience'

import BlurText from '../library/BlurText'
import AosWrapper from '../ui/AosWrapper'

const Experience = () => {
    return (
        <section id='experience' className='w-full mt-20'>
            <div className='flex flex-row items-center'>
                <div>
                    <BlurText
                        text='MINHA EXPERIÊNCIA'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[3.2rem] md:text-[6rem] leading-none md:leading-22 text-letter font-instrument text-left font-extrabold' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 mt-6 md:mt-10'>
                {experience.toReversed().map((item) => {
                    return (
                        <div className='text-letter font-instrument my-10' key={item.id}>
                            <AosWrapper>
                                <div className='flex flex-col font-dm-sans' data-aos="fade-down" data-aos-duration="1000">
                                    <div className='flex flex-row items-center gap-3'>
                                        {item.current && <div className="dot-experience"></div>}
                                        <p className='text-[0.9rem] md:text-[1.1rem] font-extrabold'>{item.company}</p>
                                    </div>
                                    <div>
                                        <h1 className='text-2xl md:text-4xl font-bold my-1'>{item.role}</h1>
                                    </div>
                                </div>
                            </AosWrapper>
                            <p className='text-[0.9rem] md:text-[1.1rem]'>{item.period}</p>
                            <div className='flex flex-row mt-3'>
                                {item.icon.map((Icon, index) => (
                                    <Icon
                                        key={index}
                                        className="text-[#c1121f] text-2xl mr-4"
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience