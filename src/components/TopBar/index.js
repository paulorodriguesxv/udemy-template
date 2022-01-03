import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import useSettings from '../../hooks/useSettings';
import { THEMES } from '../../utils/constants';

import useStyles from './style';

const TopBar = React.forwardRef(function TopBar(props, ref) {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();

  return (
    <AppBar className={classes.root} color="default" ref={ref}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <img
            style={{ width: '100%', height: '24px' }}
            src={
              settings.theme === THEMES.DARK
                ? './branco.png'
                : './logo_preto.svg'
            }
            alt="logo"
            className={classes.logo}
          />
        </Box>

        {settings.theme === THEMES.DARK ? (
          <IconButton
            className={classes.icons}
            onClick={() => saveSettings({ theme: THEMES.LIGHT })}
          >
            <Brightness7Icon />
          </IconButton>
        ) : (
          <IconButton
            className={classes.icons}
            onClick={() => saveSettings({ theme: THEMES.DARK })}
          >
            <Brightness4Icon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default TopBar;
