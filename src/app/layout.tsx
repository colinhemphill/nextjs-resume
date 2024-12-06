import { personal } from '@content';
import { Metadata, Viewport } from 'next';
import { Albert_Sans, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import { PropsWithChildren, ReactNode } from 'react';
import { protocol, vercelURL } from 'src/helpers/environment';
import { fullName } from 'src/helpers/utils';
import { twMerge } from 'tailwind-merge';
import resumeConfig from '../../edit-me/config/resumeConfig';
import { ThemeSetting } from '../../edit-me/types/Config';
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

export const generateMetadata = async (): Promise<Metadata> => {
  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const baseURL = `${protocol}://${host ?? vercelURL ?? ''}`;
  const siteName = `${fullName} Professional Résumé`;
  const title = `Résumé | ${fullName} | Somewhere`;
  const description = `Professional résumé for ${fullName}.`;

  return {
    metadataBase: new URL(baseURL),
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
    },
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
    },
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
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
}
