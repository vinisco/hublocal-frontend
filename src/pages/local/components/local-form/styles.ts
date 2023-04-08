import { Button, Grid, styled } from '@mui/material';

export const StyledInputContainer = styled('div')`
  margin: auto;
  margin-top: ${(theme) => theme.theme.spacing(4.75)};
  padding-left: ${(theme) => theme.theme.spacing(2)};
  padding-right: ${(theme) => theme.theme.spacing(2)};
`;

export const StyledButtonContainer = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: end;
  background: #ffffff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  margin-top: ${(theme) => theme.theme.spacing(4)};
  min-height: ${(theme) => theme.theme.spacing(5)};
`;

export const StyledButton = styled(Button)`
  height: ${(theme) => theme.theme.spacing(5.6)};
  margin-top: ${(theme) => theme.theme.spacing(2)};
  margin: ${(theme) => theme.theme.spacing(2)};
  margin-right: ${(theme) => theme.theme.spacing(4)};
`;
