import { Grid } from '@mui/material';
import { BasePage } from '../../shared/layouts';
import { LoginForm } from './components/login-form/LoginForm';
import { SideImage } from './components/side-image/SideImage';
import { useAppSelector } from '../../shared/hooks';
import { SignUpForm } from './components/sign-up-form/SignUpForm';

export const Login: React.FC = () => {
  const { login } = useAppSelector((state) => state.authState);

  return (
    <BasePage>
      <Grid container>
        <SideImage />
        {login ? <LoginForm /> : <SignUpForm />}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </BasePage>
  );
};
