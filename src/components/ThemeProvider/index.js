import { ThemeProvider as CoreThemeProvider  } from '@mui/material/styles';
import { createTheme } from '../../theme';
import useSettings from '../../hooks/useSettings';
import { useEffect } from 'react';

function ThemeProvider({ children }) {
  
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  useEffect(() => {
    console.log(settings.theme)
  }, [settings.theme])

  return <CoreThemeProvider theme={theme}>{children}</CoreThemeProvider>;
}

export default ThemeProvider;
