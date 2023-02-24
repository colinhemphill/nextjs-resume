import { Metadata } from 'next';
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import resumeConfig from '../../edit-me/config/resumeConfig';
import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import { getFullName } from '../helpers/utils';
import accents from '../tokens/accents';

// ICONS CONFIG
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// STYLES
import '@fortawesome/fontawesome-svg-core/styles.css';
import { headers } from 'next/headers';
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

const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL;
const dev = process.env.NODE_ENV === 'development';
const protocol = dev ? 'http' : 'https';

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${vercelURL || host}`;
  const data = await getCMSIntegration('markdown');
  const fullName = getFullName(data.personalInformation);
  const siteName = `${fullName} Professional Résumé`;
  const title = `Résumé | ${fullName} | ${data.personalInformation.attributes.location}`;
  const description = `Professional résumé for ${fullName}.`;
  const ogImage = `${baseURL}/api/og?name=${encodeURIComponent(
    fullName,
  )}&theme=${resumeConfig.ogImageTheme}`;
  const images = {
    url: ogImage,
    height: 630,
    width: 1200,
  };

  return {
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'pdf'],
    openGraph: {
      type: 'profile',
      firstName: data.personalInformation.attributes.givenName,
      lastName: data.personalInformation.attributes.familyName,
      title,
      description,
      siteName,
      url: baseURL,
      images,
    },
    themeColor: accents[resumeConfig.accentColor].light[9],
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
      images,
    },
    viewport: 'width=device-width, initial-scale=1',
  };
};

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
