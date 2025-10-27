import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const teste = () => {
    return (
        <div className='bg-background-footer w-full h-20 mt-10 flex items-center justify-center font-dm-sans'>
            <div>
                <div className='flex flex-row justify-between'>
                    <a href="mailto:michaelle.oliveira101103@gmail.com" className='flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faEnvelope} color='#fefefd' />
                        <p className='text-letter'>michaelle.oliveira101103@gmail.com</p>
                    </a>

                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faDiscord} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default teste