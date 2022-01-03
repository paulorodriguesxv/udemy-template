import { createContext, useEffect, useState } from 'react';

const FacebookContext = createContext({
  pixel: null /* a raw pixel object from react-facebook-pixel */,
  pixelId: null,
  trackEvent: () => {} /* function to track events */
});
export default FacebookContext;

export const FacebookProvider = ({ facebookPixelId, children }) => {
  const [reactPixel, setReactPixel] = useState();
  const [pixelId, setPixelId] = useState();

  const isFacebbokPixelIdIsPresent = () => {
    if (!facebookPixelId) {
      console.log(
        'No facebook Pixel Id has been defined. Please set facebookPixelId prop on FacebookProvider'
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!isFacebbokPixelIdIsPresent()) {
      return;
    }

    let fb;

    import('react-facebook-pixel')
      // eslint-disable-next-line no-return-assign
      .then((module) => (fb = module.default))
      .then((ReactPixel) => {
        ReactPixel.init(facebookPixelId);

        /* for more information, please read the react-facebook-pixel docs on
          https://github.com/zsajjad/react-facebook-pixel */
        ReactPixel.grantConsent();

        ReactPixel.track('ViewContent');
        /* ReactPixel.pageView() */

        setReactPixel(fb);
        setPixelId(facebookPixelId);
      });
  }, []);

  const trackEventHandle = (event, data) => {
    if (!isFacebbokPixelIdIsPresent()) {
      return;
    }

    reactPixel.track(event, data);
  };

  return (
    <FacebookContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        pixel: reactPixel,
        pixelId,
        trackEvent: trackEventHandle
      }}
    >
      {children}
    </FacebookContext.Provider>
  );
};
