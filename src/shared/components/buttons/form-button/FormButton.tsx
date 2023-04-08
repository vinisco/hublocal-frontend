import { MouseEventHandler } from 'react';
import { StyledButton } from './styles';

interface IFormButtonProps {
  children?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FormButton: React.FC<IFormButtonProps> = ({
  children,
  variant = 'outlined',
  color = 'inherit',
  type,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} type={type} variant={variant} color={color}>
      {children}
    </StyledButton>
  );
};
