import React from 'react'

import { PiHandWaving } from 'react-icons/pi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

import { contactSchema, ContactValues } from '../../data/contactSchema'
import { Spinner } from '../library/spinner'
import { toast } from 'sonner'

const ContactForm = () => {
    const form = React.useRef<HTMLFormElement>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactValues) => {
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
        const myPublicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                form.current!,
                {
                    publicKey: myPublicKey
                }
            );

            toast.success("Mensagem enviada!", {
                description: "Obrigado pelo contato, retornarei em breve.",
                style: {
                    background: '#10b981',
                    color: '#fff',
                    border: 'none'
                }
            });

            reset();

        } catch (error) {
            console.error(error);
            toast.error("Erro ao enviar", {
                description: "Houve um problema técnico. Tente novamente mais tarde.",
                style: {
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none'
                }
            });
        }
    }

    return (
        <div className='mt-40 mb-30 flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center gap-2 md:gap-4 px-4 text-center'>
                <div className='flex flex-row gap-4 text-center justify-center items-center'>
                    <h1 className='text-3xl md:text-5xl text-letter font-dm-sans'>Contato</h1>
                    <PiHandWaving className='text-highlight w-8 md:w-10 h-8 md:h-10 animate-bounce' />
                </div>
                <p className='max-w-2xl text-letter/60 text-[1rem] md:text-lg'>Fique à vontade para entrar em contato. Estou aberta a novas oportunidades, projetos e colaborações.</p>
            </div>

            <div className='w-[85%] md:w-2/4 mt-7'>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex flex-col text-left w-full md:w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="name">Nome</label>
                                <input autoComplete='off' className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" id="name" {...register('name')} />
                                {errors.name && <span className='text-sm text-highlight/80'>{errors.name.message}</span>}
                            </div>
                            <div className='flex flex-col text-left w-full md:w-[50%] gap-2'>
                                <label className='text-letter' htmlFor="subject">Assunto</label>
                                <input autoComplete='off' className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" id="subject" {...register('subject')} />
                                {errors.subject && <span className='text-sm text-highlight/80'>{errors.subject.message}</span>}
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col text-left w-full gap-2'>
                                <div className='w-full flex flex-col text-left   gap-2'>
                                    <label className='text-letter' htmlFor="email">Email</label>
                                    <input autoComplete='off' className='bg-gray/5 p-1 px-3 rounded-md border border-letter/10 outline-none focus:ring-1 focus:ring-highlight/40 transition-all text-letter/60' type="text" id="email" {...register('email')} />
                                    {errors.email && <span className='text-sm text-highlight/80'>{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className='flex flex-col text-left w-full gap-2'>
                                <label className='text-letter' htmlFor="content">Mensagem</label>
                                <textarea autoComplete='off' className='block w-full bg-gray/5 p-3 rounded-xl border border-letter/10 focus:ring-1 focus:ring-highlight/40 transition-all outline-none min-h-[150px] resize-none text-letter/60' id="content" {...register('content')}></textarea>
                                {errors.content && <span className='text-sm text-highlight/80'>{errors.content.message}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        {isSubmitting ? (
                            <div className='flex justify-center w-full font-dm-sans py-3 rounded-full items-center bg-linear-to-tr from-zinc-600 to-stone-900'>
                                <Spinner className="size-6 text-letter" />
                            </div>
                        ) : (
                            <button type="submit" className='w-full font-dm-sans py-3 rounded-full bg-highlight-darker text-white transition-all hover:shadow-[0_0_25px_rgba(66,00,00,1.3)]'>Enviar mensagem</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm