import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../styles/variables.css'

const ComingSoon = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-center items-center gap-4 sm:gap-10'>
                <p className='text-letter font-funnel text-4xl lg:text-9xl md:text-8xl tracking-[0.6rem] sm:tracking-[1rem] lg:tracking-[1.3rem]'>
                    coming soon
                </p>
                <p className='text-letter font-funnel text-[0.9rem] md:text-[1.13rem] sm:text-[1.15rem]'>um portfólio por <span className='text-highlight'>michaelle oliveira</span></p>
            </div>
            <div className='flex flex-row justify-center items-center mt-5 gap-4'>
                <a href="https://www.linkedin.com/in/michaelle-oliveira/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color='#c1121f' className='text-2xl sm:text-4xl' />
                </a>
                <a href="https://github.com/michaelleoliveir">
                    <FontAwesomeIcon icon={faGithub} color='#c1121f' className='text-2xl sm:text-4xl'/>
                </a>
            </div>
        </div>
    )
}

export default ComingSoon