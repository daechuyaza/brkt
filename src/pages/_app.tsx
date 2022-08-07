import { Global, ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { Layout } from '@common/ui';
import { ReactQueryUtils } from '@common/utils';
import AuthModal from '@components/auth/AuthModal';

import { global } from '../styles/global';
import { lightTheme } from '../styles/theme';

import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

console.log('hi');

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
