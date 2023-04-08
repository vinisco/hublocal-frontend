import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { HeaderAvatarButton } from './components/header-avatar-button/HeaderAvatarButton';
import { StyledHeaderBox } from './styles';
import { HeaderCompanyButton } from './components/header-company-button/HeaderCompanyButton';

export const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.userState);
  const { isLogged } = useAppSelector((state) => state.authState);

  const navigate = useNavigate();

  if (!isLogged) {
    navigate('/home');
  }

  return (
    <StyledHeaderBox>
      <HeaderCompanyButton />
      <HeaderAvatarButton userName={user?.name ?? ''} />
    </StyledHeaderBox>
  );
};
