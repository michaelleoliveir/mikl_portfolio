import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import React from 'react';
import Image from "next/image";

const teste = () => {
    const [year, setYear] = React.useState<number>(new Date().getFullYear());

    return (
        <footer className='bg-background-footer w-full py-8 md:h-28 mt-2 md:mt-10 px-0 md:px-60 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 font-dm-sans'>
            {/* logo and name */}
            <div className='flex flex-col md:flex-row items-center gap-4 text-center md:text-left'>
                <div className='shrink-0'>
                    <Image src='/logo.png' alt="Logo" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <div className='text-letter'>
                    <p className='text-[0.85rem] md:text-[1rem] leading-tight'>
                        © {year} Michaelle Oliveira. All rights reserved.
                    </p>
                    <p className='text-[0.85rem] md:text-[1rem] mt-1'>
                        Build with <FontAwesomeIcon icon={faHeart} color='#c1121f' className="mx-1" />
                    </p>
                </div>
            </div>

            {/* Social Icons */}
            <div className='flex flex-row gap-5 md:gap-4 items-center'>
                <a href="https://github.com/michaelleoliveir" target='_blank' rel="noreferrer" className="hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faGithub} color='#c1121f' className='text-[1.5rem] md:text-2xl' />
                </a>
                <a href="https://www.instagram.com/hi_mikl/" target='_blank' rel="noreferrer" className="hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faInstagram} color='#c1121f' className='text-[1.5rem] md:text-2xl' />
                </a>
                <a href="https://www.linkedin.com/in/michaelle-oliveira/" target='_blank' rel="noreferrer" className="hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faLinkedin} color='#c1121f' className='text-[1.5rem] md:text-2xl' />
                </a>
            </div>
        </footer>
    )
}

export default teste