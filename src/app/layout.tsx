import * as colors from '@radix-ui/colors';
import { personal } from 'contentlayer/generated';
import { Metadata } from 'next';
import { Albert_Sans, JetBrains_Mono } from 'next/font/google';
import { PropsWithChildren } from 'react';
import resumeConfig from '../../edit-me/config/resumeConfig';

// ICONS CONFIG
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// STYLES
import '@fortawesome/fontawesome-svg-core/styles.css';
import { headers } from 'next/headers';
import { fullName } from 'src/helpers/utils';
import { twMerge } from 'tailwind-merge';
import { ThemeSetting } from '../../edit-me/config/Config';
import './globals.css';

const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
});

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL;
const dev = process.env.NODE_ENV === 'development';
const protocol = dev ? 'http' : 'https';

export const generateMetadata = async (): Promise<Metadata> => {
  const host = headers().get('host');
  const baseURL = `${protocol}://${vercelURL || host}`;
  const siteName = `${fullName} Professional Résumé`;
  const title = `Résumé | ${fullName} | Somewhere`;
  const description = `Professional résumé for ${fullName}.`;
  const ogImage = `${baseURL}/api/og?name=${encodeURIComponent(fullName)}`;
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
      firstName: personal.givenName,
      lastName: personal.familyName,
      title,
      description,
      siteName,
      url: baseURL,
      images,
    },
    themeColor:
      colors[resumeConfig.accentColor][`${resumeConfig.accentColor}9`],
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
    <html
      lang="en"
      className={twMerge(
        albert.variable,
        jetBrainsMono.variable,
        resumeConfig.appTheme === ThemeSetting.Dark && 'dark',
      )}
    >
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
