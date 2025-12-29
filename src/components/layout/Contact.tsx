import { PiHandWaving } from 'react-icons/pi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactValues } from '../../data/contactSchema'
import { Spinner } from '../library/spinner'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactValues>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = (data: ContactValues) => {
        console.log(data)
        reset();

        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className='mt-40 mb-30 flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center gap-4 px-4 text-center'>
                <div className='flex flex-row gap-4 text-center justify-center items-center'>
                    <h1 className='text-5xl text-letter font-dm-sans'>Contato</h1>
                    <PiHandWaving className='text-highlight w-10 h-10 animate-bounce' />
                </div>
                <p className='max-w-2xl text-letter/60 text-lg'>Fique à vontade para entrar em contato. Estou aberta a novas oportunidades, projetos e colaborações.</p>
            </div>

            <div className='w-2/4 mt-7'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-10'>
                            <div className='flex flex-col text-left w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="name">Nome</label>
                                <input className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" id="name" {...register('name')} />
                                {errors.name && <span className='text-sm text-highlight/80'>{errors.name.message}</span>}
                            </div>
                            <div className='flex flex-col text-left w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="subject">Assunto</label>
                                <input className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" id="subject" {...register('subject')} />
                                {errors.subject && <span className='text-sm text-highlight/80'>{errors.subject.message}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-left mt-5 gap-2'>
                            <label className='text-letter' htmlFor="content">Mensagem</label>
                            <textarea className='block w-full bg-gray/5 p-3 rounded-xl border border-letter/10 focus:ring-1 focus:ring-highlight/40 transition-all outline-none min-h-[150px] resize-none text-letter/60' id="content" {...register('content')}></textarea>
                            {errors.content && <span className='text-sm text-highlight/80'>{errors.content.message}</span>}

                        </div>
                    </div>
                    <div className='mt-6'>
                        {isSubmitting ? (
                            <div className='flex justify-center p-2 rounded-xl text-letter items-center w-full bg-linear-to-tr from-highlight-darker to-red-700'>
                                <Spinner className="size-6" />
                            </div>
                        ) : (
                            <button type="submit" className='cursor-pointer w-full p-2 rounded-xl bg-linear-to-tr from-highlight-darker to-red-700 text-letter'>Enviar mensagem</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm