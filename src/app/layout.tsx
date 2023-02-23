import { Albert_Sans, Roboto_Mono } from '@next/font/google';
import { PropsWithChildren } from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
});

const robotoMono = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

// @ts-expect-error Server Component
const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en" className={`${albert.variable} ${robotoMono.variable}`}>
      <body className="selection:text-fuchsia-900 bg-neutral-light-1 text-neutral-light-12 selection:bg-accent-light-transparent dark:bg-neutral-dark-1 dark:text-neutral-dark-12 dark:selection:bg-accent-dark-transparent">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
