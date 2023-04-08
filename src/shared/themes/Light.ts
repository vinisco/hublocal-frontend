import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: { main: '#0385FD', dark: '#026aca', light: '#67b5fd' },
    secondary: { main: '#00CC99', dark: '#00a37a', light: '#4cdbb7' },
    error: { main: '#C90808', dark: '#8c0505', light: '#d95252' },
    info: {
      main: '#eaeaea',
      dark: '#bbbbbb',
      light: '#f0f0f0',
      contrastText: 'black',
    },
    background: { default: '#f5f5f5ff', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  spacing: 8,
});
