import { Button } from '@mui/material';

interface IHeaderButtonProps {
  children: React.ReactNode;
}

export const HeaderButton: React.FC<IHeaderButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};
