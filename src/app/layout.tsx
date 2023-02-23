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
      <body className="bg-neutral-light-1 text-neutral-light-12 selection:bg-accent-light-transparent selection:text-neutral-light-12 dark:bg-neutral-dark-1 dark:text-neutral-dark-12 dark:selection:bg-accent-dark-transparent dark:selection:text-neutral-dark-12">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
