import { Button, Grid, IconButton, styled } from '@mui/material';

export const StyledDialogContainer = styled(Grid)`
  max-height: ${(theme) => theme.theme.spacing(55.5)};
  max-width: ${(theme) => theme.theme.spacing(85.5)};
`;
export const StyledDialogHeader = styled('div')`
  height: ${(theme) => theme.theme.spacing(7.5)};
`;

export const StyledHeaderTitle = styled('span')`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: ${(theme) => theme.theme.spacing(3.15)};
  line-height: 30px;
  color: #ffffff;
  margin-left: ${(theme) => theme.theme.spacing(4.25)};
`;

export const StyledTitleContainer = styled('div')`
  height: 100%;
  width: 100%;
  background-color: ${(theme) => theme.theme.palette.error.main};
  display: flex;
  align-items: center;
`;

export const StyledButtonClose = styled(IconButton)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: ${(theme) => theme.theme.spacing(3.15)};
  line-height: 30px;
  color: #ffffff;
  margin-left: auto;
  margin-right: ${(theme) => theme.theme.spacing(1.5)};
`;

export const StyledButtonContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  background: #ffffff;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  margin-top: ${(theme) => theme.theme.spacing(4)};
`;

export const StyledButton = styled(Button)`
  margin-top: ${(theme) => theme.theme.spacing(2)};
  margin: ${(theme) => theme.theme.spacing(2)};
  margin-right: ${(theme) => theme.theme.spacing(4)};
`;

export const StyledDeleteMessage = styled('span')`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: ${(theme) => theme.theme.spacing(2.5)};
  line-height: 30px;
`;

export const StyleDeleteContainer = styled('div')`
  padding: ${(theme) => theme.theme.spacing(2.5)};
`;
