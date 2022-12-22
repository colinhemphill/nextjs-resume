import { Albert_Sans } from '@next/font/google';
import { PropsWithChildren } from 'react';
import getCMSIntegration, {
  CMSData,
} from '../cms-integration/getCMSIntegration';
import Header from '../components/Header/Header';

import './globals.css';

const albert = Albert_Sans({
  variable: '--font-albert',
  subsets: ['latin'],
});

export const getCMSData = async () => {
  const {
    education,
    hobbies,
    links,
    personalInformation,
    professional,
    skills,
  } = await getCMSIntegration('markdown');

  return {
    education,
    hobbies,
    links,
    personalInformation,
    professional,
    skills,
  };
};

// @ts-expect-error Server Component
const RootLayout: React.FC<PropsWithChildren<CMSData>> = async ({
  children,
}) => {
  const data = await getCMSData();

  return (
    <html lang="en" className={albert.variable}>
      <body className="bg-neutral-light-1 text-neutral-light-12 dark:bg-neutral-dark-1 dark:text-neutral-dark-12">
        <Header personalInformation={data.personalInformation} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
