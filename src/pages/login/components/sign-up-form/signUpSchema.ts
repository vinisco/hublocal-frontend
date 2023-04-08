import { object, string, TypeOf } from 'zod';

export const signUpSchema = object({
  name: string().min(1, 'O campo nome é obrigatório').max(100),
  email: string()
    .min(1, 'O campo email é obrigatório')
    .email('Endereço de email inválido'),
  password: string()
    .min(1, 'O campo password é obrigatório')
    .min(8, 'A senha precisa de ter mais de 8 caracteres')
    .max(32, 'A senha precisa de ter menos de 32 caracteres'),
  passwordConfirm: string().min(1, 'Por favor confirme a senha'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'A senha não combina',
});

export type SignUpInput = TypeOf<typeof signUpSchema>;
