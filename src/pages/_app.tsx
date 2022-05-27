import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { global } from '../styles/global';
import { lightTheme } from '../styles/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={global} />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
        <div id="root-modal" />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
