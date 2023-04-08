import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  max-height: ${(theme) => theme.theme.spacing(104)};
  max-width: ${(theme) => theme.theme.spacing(80)}
  position: center;
`;
