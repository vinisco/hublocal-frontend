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
import { useLoginUserMutation } from '../../../../shared/redux/auth/authApi';
import { LoginInput, loginSchema } from './loginSchema';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../../../shared/redux/auth/authSlice';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<LoginInput>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const [loginUser] = useLoginUserMutation();

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values);
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
                <StyledButtonContainer>
                  <FormButton
                    color="primary"
                    variant={'contained'}
                    type="submit"
                  >
                    Logar
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
                    Criar Conta
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
