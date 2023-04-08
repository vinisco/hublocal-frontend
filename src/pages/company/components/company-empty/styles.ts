import { Button, Grid, styled } from '@mui/material';

export const StyledGrid = styled(Grid)`
  height: calc(100vh - ${(theme) => theme.theme.spacing(10)});
`;

export const StyledContainer = styled('div')`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledEmptyMessage = styled('span')`
  font-family: Poppins;
  font-size: ${(theme) => theme.theme.spacing(7.5)};
  font-weight: 700;
  line-height: ${(theme) => theme.theme.spacing(8.125)};
  letter-spacing: 0em;
  text-align: center;
  margin: auto;
`;

export const StyledAddCompanyButton = styled(Button)`
  height: ${(theme) => theme.theme.spacing(7.5)};
  width: ${(theme) => theme.theme.spacing(41.125)};
  margin: auto;
  margin-top: ${(theme) => theme.theme.spacing(4.375)};
`;
