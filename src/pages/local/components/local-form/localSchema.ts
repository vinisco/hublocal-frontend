import { object, string, TypeOf } from 'zod';

export const localSchema = object({
  name: string().min(1, 'Campo obrigatório'),
  cep: string().min(1, 'Campo obrigatório'),
  number: string().min(1, 'Campo obrigatório'),
  street: string().min(1, 'Campo obrigatório'),
  neighborhood: string().min(1, 'Campo obrigatório'),
  city: string().min(1, 'Campo obrigatório'),
  state: string().min(1, 'Campo obrigatório'),
});

export type LocalInput = TypeOf<typeof localSchema>;
