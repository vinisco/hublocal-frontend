import { object, string, TypeOf, ZodIssueCode } from 'zod';
import { validate } from '../../../../shared/utilities/cnpj';

export const companySchema = object({
  name: string().min(1, 'O campo nome é obrigatório'),
  website: string().min(1, 'O campo website é obrigatório'),
  cnpj: string()
    .min(1, 'O campo cnpj é obrigatório')
    .superRefine((i, context) => {
      if (!validate(i)) {
        context.addIssue({
          code: ZodIssueCode.custom,
          message: 'Cnpj inválido',
        });
      }
    }),
});

export type CompanyInput = TypeOf<typeof companySchema>;
