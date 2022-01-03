import React from 'react';
import Box from '@mui/material/Box';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import VideoPlay from '../VideoPlay';

import styles from './style';

const VideoThumb = () => {
  const [openVideo, setOpenVideo] = React.useState(false);

  const handleClickOpen = () => {
    setOpenVideo(true);
  };

  const handleClose = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <Box
        component="button"
        sx={[styles.btnGhost, styles.introAssetPlaceholder]}
        onClick={handleClickOpen}
      >
        <Box component="span" sx={[styles.introAsset]}>
          <img
            width="240"
            height="135"
            src="./video-thumb.jpg"
            alt="video-thumb"
            style={styles.videoOverlay}
          />
        </Box>
        <Box
          component="span"
          sx={[
            styles.assetOverlay,
            {
              background:
                'linear-gradient(180deg,rgba(28,29,31,0) 0%,rgba(28,29,31,0.9) 100%)'
            }
          ]}
        />
        <Box component="span" sx={[styles.overPlayOverlay]}>
          <PlayCircleFilledWhiteIcon sx={{ fontSize: 80, color: '#fff' }} />
        </Box>
      </Box>
      <VideoPlay open={openVideo} handleClose={handleClose} />
    </>
  );
};

export default VideoThumb;
