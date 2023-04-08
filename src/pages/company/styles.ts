import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  margin-left: auto;
  max-width: ${(theme) => theme.theme.spacing(32.25)};
  text-transform: none;
  margin-top: ${(theme) => theme.theme.spacing(3)};
`;
