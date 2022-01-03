import { colors } from '@mui/material';
import { createTheme as createCustomTheme } from '@mui/material/styles';

import { THEMES } from '../utils/constants';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      mode: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#a435f0'
      },
      secondary: {
        main: '#3EA6FF'
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    rating: {
      main: '#f3ca8c'
    },
    topContainer: {
      color: '#fff',
      backgroundColor: '#000'
    },
    containerShadow: {
      boxShadow: '0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)'
    }
  },
  {
    name: THEMES.DARK,
    palette: {
      mode: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34'
      },
      primary: {
        main: '#8a85ff'
      },
      secondary: {
        main: '#8a85ff'
      },
      ratting: {
        main: '#f3ca8c'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
      }
    },
    rating: {
      main: '#f3ca8c'
    },
    topContainer: {
      color: '#fff',
      backgroundColor: '#000'
    },
    containerShadow: {
      boxShadow:
        '0 2px 4px rgba(255,255,255,.08),0 4px 12px rgba(255,255,255,.08)'
    }
  }
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  themeOptions.typography = {
    marginBottom: '0.8rem'
  };

  themeOptions.components = {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-.02rem'
        }
      }
    }
  };

  const theme = createCustomTheme(themeOptions);

  theme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.9rem'
    }
  };

  theme.typography.body2 = {
    margin: 0,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
    display: 'block'
  };

  return theme;
};

export default createTheme;
