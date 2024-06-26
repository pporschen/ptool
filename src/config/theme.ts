import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6897bb',
    },
    secondary: {
      main: '#bb6897',
    },
    error: {
      main: '#ff3333',
    },
    background: {
      default: '#f5f5f5',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontWeight: 'bold',
          minHeight: '4rem',
          minWidth: '6rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minHeight: '4rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '4rem !important',
          justifyContent: 'space-between',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          justifyContent: 'center',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
