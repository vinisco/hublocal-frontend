import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  max-width: 100vw;
  min-height: calc(100vh - ${(theme) => theme.theme.spacing(10)});
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${(theme) => theme.theme.palette.background.default};
`;
