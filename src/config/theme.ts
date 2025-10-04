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
    // Responsive typography that scales better with display density
    fontSize: 14,
    htmlFontSize: 16,
    // Define responsive font sizes
    h1: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
    },
    h2: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
    },
    body1: {
      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    },
    body2: {
      fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
    },
    button: {
      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280, // Adjusted for better scaling support
      xl: 1536, // Common 125% scaled resolution
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontWeight: 'bold',
          minHeight: 'clamp(3rem, 5vh, 4rem)',
          minWidth: 'clamp(5rem, 8vw, 6rem)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          // Responsive scaling for high-DPI displays
          '@media screen and (-webkit-min-device-pixel-ratio: 1.25)': {
            minHeight: '3.5rem',
            minWidth: '5.5rem',
            fontSize: '0.9rem',
          },
          '@media screen and (-webkit-min-device-pixel-ratio: 1.5)': {
            minHeight: '3rem',
            minWidth: '5rem',
            fontSize: '0.85rem',
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
          minHeight: 'clamp(3rem, 5vh, 4rem)',
          '@media screen and (-webkit-min-device-pixel-ratio: 1.25)': {
            minHeight: '3.5rem',
          },
          '@media screen and (-webkit-min-device-pixel-ratio: 1.5)': {
            minHeight: '3rem',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: 'clamp(3rem, 5vh, 4rem) !important',
          justifyContent: 'space-between',
          '@media screen and (-webkit-min-device-pixel-ratio: 1.25)': {
            minHeight: '3.5rem !important',
          },
          '@media screen and (-webkit-min-device-pixel-ratio: 1.5)': {
            minHeight: '3rem !important',
          },
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
