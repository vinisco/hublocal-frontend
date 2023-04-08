import { Card, IconButton, styled } from '@mui/material';

export const StyledTableCard = styled(Card)`
  min-heigh: ${(theme) => theme.theme.spacing(82.5)};
  margin-top: ${(theme) => theme.theme.spacing(2.75)};
  margin-bottom: ${(theme) => theme.theme.spacing(2)};
  padding: ${(theme) => theme.theme.spacing(1)};
  padding-bottom: ${(theme) => theme.theme.spacing(0)};
`;

export const StyledIconButton = styled(IconButton)``;

export const StyledPageNumberContainer = styled('div')`
  width: 100%;
  height: 100%;
  text-align: end;
  margin-top: ${(theme) => theme.theme.spacing(1.7)};
`;

export const StyledPageText = styled('span')`
  margin: auto;
  font-family: Poppins;
  font-weight: 400;
  font-size: ${(theme) => theme.theme.spacing(1.8)};
  line-height: ${(theme) => theme.theme.spacing(0.25)};
`;
export const StyledPageNumber = styled('span')`
  font-family: Poppins;
  font-weight: 400;
  font-size: ${(theme) => theme.theme.spacing(1.8)};
  line-height: ${(theme) => theme.theme.spacing(0.25)};
  margin-left: ${(theme) => theme.theme.spacing(1.8)};
`;

export const StyledPageContainer = styled('div')`
  min-height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`;

export const StyledPaginationContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;
