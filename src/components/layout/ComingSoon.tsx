import '../../styles/variables.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ComingSoon = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen gap-4 sm:gap-10'>
                <p className='text-letter font-funnel text-4xl lg:text-9xl tracking-[0.6rem] sm:tracking-[1rem] lg:tracking-[1.3rem]'>
                    coming soon
                </p>
                <p className='text-letter font-funnel text-[0.9rem] sm:text-[1.15rem]'>um portfólio por <span className='text-highlight'>michaelle oliveira</span></p>
            </div>
        </div>
    )
}

export default ComingSoon