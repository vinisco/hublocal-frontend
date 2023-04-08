import { Header } from '../../components';
import { StyledBox } from './styles';

interface IBaseLoggedPageProps {
  children?: React.ReactNode;
}

export const BaseLoggedPage: React.FC<IBaseLoggedPageProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <StyledBox>{children}</StyledBox>
    </>
  );
};
