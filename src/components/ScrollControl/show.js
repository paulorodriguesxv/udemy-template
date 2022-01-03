import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

function ShowOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 250,
  });

  return (
    <>
    <Fade in={trigger} >
      <Box
        role="presentation"
        sx={{ position: 'fixed', bottom: 206, zIndex: 1 }}
      >
        {children}
      </Box>
    </Fade>

    {props.showDual ?
      <Fade in={!trigger} sx={{zIndex: 1}} appear={false}>
        <Box
          role="presentation"
          sx={{ position: 'fixed', bottom: 206,  }}
        >
          {children}
        </Box>
      </Fade> : null
    }
    </>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ShowOnScroll
