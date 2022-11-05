import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { Albert_Sans } from '@next/font/google';
import { blueDark } from '@radix-ui/colors';
import { StrumProvider } from '@strum/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@strum/react/styles';
import '../globals.css';
faConfig.autoAddCss = false;

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--fonts-sans',
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={blueDark.blue9} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
      </Head>

      <StrumProvider>
        <main
          style={assignInlineVars({
            '--fonts-sans': albertSans.style.fontFamily,
          })}
        >
          <Component {...pageProps} />
        </main>
      </StrumProvider>
    </>
  );
};

export default MyApp;
