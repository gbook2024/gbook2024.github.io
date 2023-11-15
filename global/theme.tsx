import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#504e63',
    },
    secondary: {
      main: '#a88661',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#504e63'
    },
    background: {
      default: '#fbfbfb',
      paper: '#fbfbfb',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat, sans-serif',
      'Montserrat, sans-serif',
      'Montserrat, sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 60,
      fontWeight: 700
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 48,
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 36,
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 28,
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 20,
      fontWeight: 700
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif'
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif'
    },
    subtitle1: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 20,
      fontWeight: 700
    },
    subtitle2: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 16,
      fontWeight: 500
    }
  },
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none'
        },
      },
    },
  },
});

export default theme;