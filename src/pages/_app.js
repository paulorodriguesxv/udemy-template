// pages/_app.js
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { useEffect } from 'react';
// import { CacheProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import { SettingsProvider } from '../contexts/SettingsContext';
import ThemeProvider from '../components/ThemeProvider';
// import createEmotionCache from '../createEmotionCache';
import useFacebook from '../hooks/useFacebook';
import { FacebookProvider } from '../contexts/FacebookContext';

import '../components/Layout/styles.css';

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, pageProps } = props;

  const { pixel } = useFacebook();

  const router = useRouter();

  /* trigger a PageView event every time a new route is accessed */
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      pixel.track('ViewContent');
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{pageProps.data?.productName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider>
        <ThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <FacebookProvider facebookPixelId={FACEBOOK_PIXEL_ID}>
            <Component {...pageProps} />
          </FacebookProvider>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
};

export default MyApp;
