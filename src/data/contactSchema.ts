import * as z from 'zod'

export const contactSchema = z.object({
    name: z.string().min(1, {message: 'O nome é obrigatório'}),
    subject: z.string().min(1, {message: 'Insira o assunto da mensagem'}),
    content: z.string().min(10, {message: 'Insira o conteúdo da mensagem (mínimo 10 caracteres)'})
})

export type ContactValues = z.infer<typeof contactSchema>;