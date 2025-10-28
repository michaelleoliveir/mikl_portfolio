import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const teste = () => {
    const [year, setYear] = React.useState<number>(new Date().getFullYear());

    return (
        <div className='bg-background-footer w-full h-28 mt-10 flex items-center justify-center font-dm-sans'>
            <div>
                <div className='flex flex-row justify-between w-full gap-40'>
                    <a href="mailto:michaelle.oliveira101103@gmail.com" className='flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faEnvelope} color='#b0b3b3' />
                        <p className='text-light-letter'>michaelle.oliveira101103@gmail.com</p>
                    </a>

                    <div className='flex gap-8'>
                        <a href="https://www.linkedin.com/in/michaelle-oliveira/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} size='xl' color='#b0b3b3' />
                        </a>
                        <a href="https://github.com/michaelleoliveir" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} size='xl' color='#b0b3b3' />
                        </a>
                        <a href="https://www.instagram.com/hi_mikl/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} size='xl' color='#b0b3b3' />
                        </a>
                    </div>
                </div>

                <p className='flex justify-center text-light-letter mt-7 text-sm'>© {year} Michaelle Oliveira. All rights reserved.</p>
            </div>
        </div>
    )
}

export default teste