import { Global, ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { Layout } from '@common/ui';
import { ReactQueryUtils } from '@common/utils';
import AuthModal from '@components/auth/AuthModal';

import { global } from '../styles/global';
import { lightTheme } from '../styles/theme';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={ReactQueryUtils.getQueryClient()}>
      <RecoilRoot>
        <Global styles={global} />
        <ThemeProvider theme={lightTheme}>
          <Layout>
            {getLayout(
              <>
                <Component {...pageProps} />
                <AuthModal />
              </>
            )}
          </Layout>
          <div id="root-modal" />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
