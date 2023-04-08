import { Box, Divider, Grid } from '@mui/material';
import {
  StyledButton,
  StyledButtonContainer,
  StyledInputContainer,
} from './styles';
import { LocalInput, localSchema } from './localSchema';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useCreateLocalMutation,
  useEditLocalMutation,
} from '../../../../shared/redux/local/localApi';
import { ControlledTextfieldSmall } from '../../../../shared/components';
import { useAppSelector } from '../../../../shared/hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const LocalForm: React.FC = () => {
  const defaultValues = {
    name: '',
    website: '',
    cnpj: '',
  };

  const { dialog, local } = useAppSelector((state) => state.localState);
  const { id, isNew } = dialog;

  const methods = useForm<LocalInput>({
    defaultValues,
    resolver: zodResolver(localSchema),
  });

  let { company_id } = useParams();

  useEffect(() => {
    if (!isNew) {
      methods.reset({
        ...local,
      });
    }
    //eslint-disable-next-line
  }, [isNew]);

  const [CreateLocal] = useCreateLocalMutation();
  const [EditLocal] = useEditLocalMutation();

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<LocalInput> = (values) => {
    isNew
      ? CreateLocal({ ...values, company_id: company_id ?? '' })
      : EditLocal({ id, ...values });
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
                <ControlledTextfieldSmall name="cep" type="text" label="CEP" />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall name="street" label="Rua" />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall name="number" label="Número" />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall name="neighborhood" label="Bairro" />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall name="city" label="Cidade" />
              </StyledInputContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledInputContainer>
                <ControlledTextfieldSmall name="state" label="Estado" />
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
