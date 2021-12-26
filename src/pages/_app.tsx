import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.scss';

config.autoAddCss = false;
library.add(fab);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
