import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  margin-left: auto;
  max-width: ${(theme) => theme.theme.spacing(32.25)};
  text-transform: none;
  margin-top: -${(theme) => theme.theme.spacing(2.5)};
`;

export const StyledArrowContainer = styled('div')`
  display: flex;
  justify-content: left;
  margin-top: ${(theme) => theme.theme.spacing(1)};
`;

export const StyledArrowText = styled('span')`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: ${(theme) => theme.theme.spacing(2.25)};
  line-height: ${(theme) => theme.theme.spacing(2.5)};
  margin-left: ${(theme) => theme.theme.spacing(1)};
  margin-top: ${(theme) => theme.theme.spacing(0.25)};
`;

export const StyledArrowLink = styled('div')`
  display: flex;
  justify-content: left;
  margin-top: ${(theme) => theme.theme.spacing(1)};
  cursor: pointer;
`;
