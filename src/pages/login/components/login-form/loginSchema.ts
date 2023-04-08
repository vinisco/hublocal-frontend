import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
  email: string()
    .min(1, 'O campo email é obrigatório')
    .email('Endereço de email inválido'),
  password: string().min(1, 'O campo password é obrigatório'),
});

export type LoginInput = TypeOf<typeof loginSchema>;
