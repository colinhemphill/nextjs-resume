import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import '../helpers/fontawesomeConfig';
import '../strum-design-system';
import StrumProvider from '../strum-design-system/components/StrumProvider/StrumProvider';
import colors from '../strum-design-system/themes/timbre/colors';
import '../styles/app.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={colors.primary} />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <ErrorBoundary>
        <StrumProvider>
          <Component {...pageProps} />
        </StrumProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
