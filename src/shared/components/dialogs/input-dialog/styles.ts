import { Grid, IconButton, styled } from '@mui/material';

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
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-left: ${(theme) => theme.theme.spacing(4.25)};
`;

export const StyledTitleContainer = styled('div')`
  height: 100%;
  width: 100%;
  background-color: ${(theme) => theme.theme.palette.primary.main};
  display: flex;
  align-items: center;
`;

export const StyledButtonClose = styled(IconButton)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-left: auto;
  margin-right: ${(theme) => theme.theme.spacing(1.5)};
`;
