import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const ShowOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 250
  });

  return (
    <>
      <Fade in={trigger}>
        <Box
          role="presentation"
          sx={{ position: 'fixed', bottom: 206, zIndex: 1 }}
        >
          {children}
        </Box>
      </Fade>

      {props.showDual ? (
        <Fade in={!trigger} sx={{ zIndex: 1 }} appear={false}>
          <Box role="presentation" sx={{ position: 'fixed', bottom: 206 }}>
            {children}
          </Box>
        </Fade>
      ) : null}
    </>
  );
};

export default ShowOnScroll;
