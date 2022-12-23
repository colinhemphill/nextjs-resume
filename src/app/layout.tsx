import { Albert_Sans } from '@next/font/google';
import { PropsWithChildren } from 'react';
import getCMSIntegration, {
  CMSData,
} from '../cms-integration/getCMSIntegration';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

const albert = Albert_Sans({
  variable: '--font-albert',
  subsets: ['latin'],
});

// @ts-expect-error Server Component
const RootLayout: React.FC<PropsWithChildren<CMSData>> = async ({
  children,
}) => {
  const data = await getCMSIntegration('markdown');

  return (
    <html lang="en" className={albert.variable}>
      <body className="selection:text-fuchsia-900 bg-neutral-light-1 text-neutral-light-12 selection:bg-accent-light-transparent dark:bg-neutral-dark-1 dark:text-neutral-dark-12 dark:selection:bg-accent-dark-transparent">
        <Header personalInformation={data.personalInformation} />
        {children}

        <Footer
          personalInformation={data.personalInformation}
          links={data.links}
        />
      </body>
    </html>
  );
};

export default RootLayout;
