import { PiHandWaving } from 'react-icons/pi'

const ContactForm = () => {
    return (
        <div className='mt-40 mb-30 flex flex-col justify-center items-center text-center'>
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
                                <input className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" name="name" id="name" />
                            </div>
                            <div className='flex flex-col text-left w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="subject">Assunto</label>
                                <input className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" name="subject" id="subject" />
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-left mt-5 gap-2'>
                            <label className='text-letter' htmlFor="subject">Mensagem</label>
                            <textarea className='block w-full bg-gray/5 p-3 rounded-xl border border-letter/10 focus:ring-1 focus:ring-highlight/40 transition-all outline-none min-h-[150px] resize-none text-letter/60' name="" id=""></textarea>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button type="submit" className='cursor-pointer w-full p-2 rounded-xl bg-linear-to-tr from-highlight-darker to-red-700 text-letter'>Enviar mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm