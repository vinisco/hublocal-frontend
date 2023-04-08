import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  width: 100%;
  min-height: ${(theme) => theme.theme.spacing(7.5)};
  font-family: Poppins;
  font-size: ${(theme) => theme.theme.spacing(2.5)};
  font-weight: 500;
  line-height: ${(theme) => theme.theme.spacing(2.5)};
  letter-spacing: 0em;
  text-align: center;
  color: #ffffffff;
`;
