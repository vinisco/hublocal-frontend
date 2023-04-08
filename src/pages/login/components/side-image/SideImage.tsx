import {
  StyledPNG,
  StyledTitleContainer,
  StyledSubTitleContainer,
  StyledWhiteSubtitle,
  StyledWhiteTitle,
  StyledGreenContainer,
} from './styles';
import { Box, Grid, useTheme } from '@mui/material';

export const SideImage: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={6}>
      <Box height={'100%'} display={{ xs: 'none', md: 'block' }}>
        <Grid
          container
          height={'100%'}
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Grid item xs={12} md={12} height={'70%'}>
            <StyledPNG />
          </Grid>
          <Grid item xs={12} md={12} height={'30%'}>
            <StyledGreenContainer>
              <StyledTitleContainer>
                <StyledWhiteTitle>
                  Junte-se a vários <br />
                  clientes satisfeitos.
                  <br />
                </StyledWhiteTitle>
              </StyledTitleContainer>
              <StyledSubTitleContainer>
                <StyledWhiteSubtitle>
                  Cliente HubLocal ganha mais relevância, autoridade e<br />
                  visibilidade. Mais de 7.000 marcas confiam na nossa <br />
                  plataforma. Seja uma delas!
                </StyledWhiteSubtitle>
              </StyledSubTitleContainer>
            </StyledGreenContainer>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
