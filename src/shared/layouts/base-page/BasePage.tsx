import { StyledBox } from './styles';

interface IBasePageProps {
  children?: React.ReactNode;
}

export const BasePage: React.FC<IBasePageProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
