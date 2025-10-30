import React from 'react'
import BlurText from '../library/BlurText'
import AosWrapper from '../ui/AosWrapper'

import { faAngular, faAws, faCss3Alt, faFigma, faHtml5, faReact, faWix } from '@fortawesome/free-brands-svg-icons'
import { faMobileScreen, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Experience = () => {
    const experience = [
        {
            id: 1,
            company: 'FULLDEV',
            role: 'Desenvolvedora Frontend',
            period: 'Set/25 - Presente',
            current: true,
            icon: [faAngular, faHtml5, faCss3Alt, faFigma]
        },
        {
            id: 2,
            company: 'PIPOCA ÁGIL',
            role: 'Desenvolvedora Frontend',
            period: 'Ago/25 - Presente',
            current: true,
            icon: [faReact, faFigma, faMobileScreen]
        },
        {
            id: 3,
            company: 'INNOVA TECH ONE',
            role: 'Desenvolvedora Low-code',
            period: 'Jul/25 - Ago/25',
            current: false,
            icon: [faWix, faFigma, faCss3Alt, faReact]
        },
        {
            id: 4,
            company: 'LACREI SAÚDE',
            role: 'Desenvolvedora Fullstack',
            period: 'Mar/25 - Jul/25',
            current: false,
            icon: [faReact, faCss3Alt, faHtml5, faVial, faAws]
        }
    ]

    return (
        <section id='experience' className='w-full mt-20'>
            <div className='flex flex-row items-center'>
                <div className='w-full'>
                    <BlurText
                        text='MINHA EXPERIÊNCIA'
                        delay={150}
                        direction='top'
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined}
                        className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-10'>
                {experience.map((item) => {
                    return (
                        <div className='text-letter font-instrument my-10' key={item.id}>
                            <AosWrapper>
                                <div className='flex flex-row items-center gap-3 font-dm-sans' data-aos="fade-down" data-aos-duration="1000">
                                    {item.current && <div className="dot-experience"></div>}
                                    <p className='text-[1.1rem] font-extrabold'>{item.company}</p>
                                </div>
                            </AosWrapper>
                            <h1 className='text-4xl font-bold my-1'>{item.role}</h1>
                            <p className='text-[1.1rem]'>{item.period}</p>
                            <div className='mt-3'>
                                {item.icon.map((icon) => (
                                    <FontAwesomeIcon
                                        key={icon.iconName}
                                        icon={icon}
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