import { styled } from '@mui/material';

export const StyledPNGContainer = styled('div')`
  max-width: ${(theme) => theme.theme.spacing(38.25)};
  max-height: ${(theme) => theme.theme.spacing(20)};
  margin-bottom: ${(theme) => theme.theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(theme) => theme.theme.spacing(1)};
  padding-left: ${(theme) => theme.theme.spacing(2)};
  padding-right: ${(theme) => theme.theme.spacing(2)};
`;

export const StyledImg = styled('img')`
  width: 100%;
  heigh: 100%;
`;

export const StyledInputContainer = styled('div')`
  max-width: ${(theme) => theme.theme.spacing(50)};
  margin: auto;
  margin-top: ${(theme) => theme.theme.spacing(4.75)};
  padding-left: ${(theme) => theme.theme.spacing(2)};
  padding-right: ${(theme) => theme.theme.spacing(2)};
`;

export const StyledButtonContainer = styled('div')`
  max-width: ${(theme) => theme.theme.spacing(50)};
  margin: auto;
  margin-top: ${(theme) => theme.theme.spacing(3)};
  padding-left: ${(theme) => theme.theme.spacing(2)};
  padding-right: ${(theme) => theme.theme.spacing(2)};
`;

export const StyledBottomButtonContainer = styled('div')`
  max-width: ${(theme) => theme.theme.spacing(50)};
  margin: auto;
  padding-left: ${(theme) => theme.theme.spacing(2)};
  padding-right: ${(theme) => theme.theme.spacing(2)};
  margin-top: ${(theme) => theme.theme.spacing(2)};
  margin-bottom: ${(theme) => theme.theme.spacing(4)};
`;

export const StyledFormContainer = styled('div')`
  width: 100%;
  margin: auto;
`;
