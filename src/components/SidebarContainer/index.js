import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import ShowOnScroll from '../ScrollControl/show';
import VideoThumb from '../VideoThumb';
import useFacebook from '../../hooks/useFacebook';
import { formatter, getDiscountedPrice } from '../../priceUtils';
import styles from './style';

const iconStyle = {
  fontSize: '1.0em'
};

const SideBarContainer = (props) => {
  const { data } = props;
  const { trackEvent } = useFacebook();

  const mainTheme = useTheme();
  const theme = createTheme(mainTheme, styles);
  theme.containerStyle.backgroundColor = theme.palette.background.default;
  theme.containerStyle.boxShadow = theme.containerShadow.boxShadow;

  const handleBuyClick = () => {
    trackEvent('InitiateCheckout', {});

    window.open(data.sell.payoutUrl, '_self');
  };

  return (
    <ShowOnScroll {...props} showDual>
      <Box sx={theme.containerStyle}>
        <Box sx={{ position: 'relative' }}>
          <VideoThumb />
          <Box
            sx={{
              position: 'absolute',
              color: theme.palette.text.primary,
              padding: '20px',
              width: '100%'
            }}
          >
            <Box sx={styles.flexContainer}>
              <Typography component="span" sx={styles.fontHeading}>
                {getDiscountedPrice(data.sell.price, data.sell.discount)}
              </Typography>
              {data.sell.discount > 0 ? (
                <Typography
                  component="span"
                  variant="body2"
                  sx={[styles.discount, { margin: '12px' }]}
                >
                  {formatter.format(data.sell.price)}
                </Typography>
              ) : null}
            </Box>
            {data.sell.discount > 0 ? (
              <>
                <Box sx={styles.flexContainer}>
                  <Typography component="span" variant="body2">
                    {data.sell.discount * 100}% off{' '}
                  </Typography>
                </Box>

                <Box sx={styles.flexContainer}>
                  <AccessAlarmIcon
                    sx={{ color: '#b32d0f', fontSize: '24px' }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.4, margin: '4px' }}
                  >
                    <span style={{ fontWeight: 'bold' }}>3 days</span> left at
                    this price!
                  </Typography>
                </Box>
              </>
            ) : null}
            <Box sx={[styles.flexContainer, { paddingTop: '0.5em' }]}>
              <Button
                variant="contained"
                disableElevation
                sx={{ width: '80%' }}
                onClick={handleBuyClick}
              >
                Buy now
              </Button>
              <Button
                variant="outlined"
                disableElevation
                sx={{ marginLeft: '0.5em' }}
              >
                <FavoriteBorderIcon />
              </Button>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.8em',
                  textAlign: 'center',
                  padding: '0.5em'
                }}
              >
                30-Day Money-Back Guarantee
              </Typography>
            </Box>

            <Box sx={{ paddingTop: '1em' }}>
              <Typography variant="h6">This course includes:</Typography>
              <List dense>
                <ListItem>
                  <OndemandVideoIcon sx={iconStyle} />
                  <Typography display="block" variant="body2" sx={{ pl: 1 }}>
                    3 hours on-demand video
                  </Typography>
                </ListItem>
                <ListItem>
                  <SystemUpdateAltIcon sx={iconStyle} />
                  <Typography display="block" variant="body2" sx={{ pl: 1 }}>
                    1 resources to download
                  </Typography>
                </ListItem>
                <ListItem>
                  <AllInclusiveIcon sx={iconStyle} />
                  <Typography display="block" variant="body2" sx={{ pl: 1 }}>
                    Full lifetime access
                  </Typography>
                </ListItem>
                <ListItem>
                  <PhoneIphoneIcon sx={iconStyle} />
                  <Typography display="block" variant="body2" sx={{ pl: 1 }}>
                    Access on mobile and TV
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </ShowOnScroll>
  );
};

export default SideBarContainer;
