import { Box, Divider, Grid } from '@mui/material';
import {
  StyledButton,
  StyledButtonContainer,
  StyledInputContainer,
} from './styles';
import { CompanyInput, companySchema } from './companySchema';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useCreateCompanyMutation,
  useEditCompanyMutation,
} from '../../../../shared/redux/company/companyApi';
import {
  ControlledCnpjTextfield,
  ControlledTextfieldSmall,
} from '../../../../shared/components';
import { useAppSelector } from '../../../../shared/hooks';
import { useEffect } from 'react';

export const CompanyForm: React.FC = () => {
  const defaultValues = {
    name: '',
    website: '',
    cnpj: '',
  };

  const { dialog, company } = useAppSelector((state) => state.companyState);
  const { id, isNew } = dialog;

  const methods = useForm<CompanyInput>({
    defaultValues,
    resolver: zodResolver(companySchema),
  });

  useEffect(() => {
    if (!isNew) {
      methods.reset({
        ...company,
      });
    }
    //eslint-disable-next-line
  }, [isNew]);

  const [CreateCompany] = useCreateCompanyMutation();
  const [EditCompany] = useEditCompanyMutation();

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<CompanyInput> = (values) => {
    isNew ? CreateCompany(values) : EditCompany({ id, ...values });
  };

  return (
    <>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitHandler)}
          autoComplete="off"
        >
          <Grid container height={'100%'}>
            <Grid item xs={12} md={12}>
              <StyledInputContainer>
                <ControlledTextfieldSmall
                  name="name"
                  type="text"
                  label="Nome"
                />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall
                  name="website"
                  type="text"
                  label="Website"
                />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledCnpjTextfield name="cnpj" label="CNPJ" />
              </StyledInputContainer>
            </Grid>
            <Divider />
            <StyledButtonContainer item xs={12} md={12}>
              <StyledButton type="submit" variant="contained">
                {!isNew ? 'Salvar' : 'Adicionar'}
              </StyledButton>
            </StyledButtonContainer>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
};
