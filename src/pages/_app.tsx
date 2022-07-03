import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { ReactQueryUtils } from '@common/utils';

import { Layout } from '@common/ui';
import AuthModal from '@components/auth/AuthModal';

import { global } from '../styles/global';
import { lightTheme } from '../styles/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ReactQueryUtils.getQueryClient()}>
      <RecoilRoot>
        <Global styles={global} />
        <ThemeProvider theme={lightTheme}>
          <Layout>
            <Component {...pageProps} />
            <AuthModal />
          </Layout>
          <div id="root-modal" />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
