import {
  StyledBottomButtonContainer,
  StyledButtonContainer,
  StyledFormContainer,
  StyledInputContainer,
  StyledPNGContainer,
  StyledImg,
} from './styles';
import { ControlledTextfield } from '../../../../shared/components/inputs';
import { FormButton } from '../../../../shared/components/buttons';
import { Box, Grid } from '@mui/material';
import image2 from '../../../../shared/images/image2.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SignUpInput, signUpSchema } from './signUpSchema';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../../../shared/redux/auth/authSlice';
import { useRegisterUserMutation } from '../../../../shared/redux/user/userApi';

export const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();

  const methods = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  });

  const [RegisterUser] = useRegisterUserMutation();

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<SignUpInput> = (values) => {
    RegisterUser(values);
  };

  const handleChangeForm = () => {
    dispatch(changeForm());
  };

  return (
    <Grid item xs={12} md={6} minHeight={'100vh'}>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitHandler)}
          noValidate
          autoComplete="off"
        >
          <Grid container height={'100%'}>
            <StyledFormContainer>
              <Grid item xs={12} md={12}>
                <StyledPNGContainer>
                  <StyledImg src={image2} alt="logo hublocal" />
                </StyledPNGContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledInputContainer>
                  <ControlledTextfield name="name" type="text" label="Nome" />
                </StyledInputContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledInputContainer>
                  <ControlledTextfield
                    name="email"
                    type="email"
                    label="Email"
                  />
                </StyledInputContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledInputContainer>
                  <ControlledTextfield
                    name="password"
                    type="password"
                    label="Senha"
                  />
                </StyledInputContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledInputContainer>
                  <ControlledTextfield
                    name="passwordConfirm"
                    type="password"
                    label="Repetir Senha"
                  />
                </StyledInputContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledButtonContainer>
                  <FormButton
                    color="primary"
                    variant={'contained'}
                    type="submit"
                  >
                    Registrar
                  </FormButton>
                </StyledButtonContainer>
              </Grid>
              <Grid item xs={12} md={12}>
                <StyledBottomButtonContainer>
                  <FormButton
                    onClick={handleChangeForm}
                    color="secondary"
                    variant={'contained'}
                  >
                    Logar
                  </FormButton>
                </StyledBottomButtonContainer>
              </Grid>
            </StyledFormContainer>
          </Grid>
        </Box>
      </FormProvider>
    </Grid>
  );
};
