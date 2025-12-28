import { PiHandWaving } from 'react-icons/pi'

const ContactForm = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center text-center mt-5'>
            <div className='flex flex-col justify-center items-center gap-4 px-4 text-center'>
                <div className='flex flex-row gap-4 text-center justify-center items-center'>
                    <h1 className='text-5xl text-letter font-dm-sans'>Contato</h1>
                    <PiHandWaving className='text-highlight w-10 h-10 animate-bounce' />
                </div>
                <p className='max-w-2xl text-letter/60 text-lg'>Fique à vontade para entrar em contato. Estou aberta a novas oportunidades, projetos e colaborações.</p>
            </div>

            <div className='w-2/4 mt-5'>
                <form action="" method="post">
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-10'>
                            <div className='flex flex-col text-left w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="name">Nome</label>
                                <input className='bg-gray/5 p-1 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all' type="text" name="name" id="name" />
                            </div>
                            <div className='flex flex-col text-left w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="subject">Assunto</label>
                                <input className='bg-gray/5 p-1 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all' type="text" name="subject" id="subject" />
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-left mt-5 gap-2'>
                            <label className='text-letter' htmlFor="subject">Mensagem</label>
                            <textarea className='block w-full bg-gray/5 p-3 rounded-xl border border-letter/10 focus:ring-1 focus:ring-highlight/40 transition-all outline-none min-h-[150px] resize-none' name="" id=""></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm