import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

import Image from "next/image";

const teste = () => {
    const [year, setYear] = React.useState<number>(new Date().getFullYear());

    return (
        <footer className='bg-background-footer w-full h-28 mt-10 px-60 flex flex-row items-center justify-between font-dm-sans'>
            {/* logo and name */}
            <div className='flex flex-row gap-4'>
                <div className='flex items-center'>
                    <Image src='/logo.png' alt="Logo" width={36} height={36} />
                </div>
                <div className='text-letter'>
                    <p>© 2025 Michaelle Oliveira. All rights reserved.</p>
                    <p className='text-sm'>Build with <FontAwesomeIcon icon={faHeart} color='#c1121f' /></p>
                </div>
            </div>

            <div className='flex flex-row gap-4'>
                <a href="https://github.com/michaelleoliveir" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} color='#c1121f' size='xl' />
                </a>
                <a href="https://www.instagram.com/hi_mikl/" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} color='#c1121f' size='xl' />
                </a>
                <a href="https://www.linkedin.com/in/michaelle-oliveira/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} color='#c1121f' size='xl' />
                </a>
            </div>
        </footer>
    )
}

export default teste