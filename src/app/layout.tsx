import { personal } from '@content';
import { Metadata, Viewport } from 'next';
import { Albert_Sans, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import { PropsWithChildren, ReactNode } from 'react';
import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';
import { deployURL, protocol } from 'src/helpers/environment';
import { cn, fullName } from 'src/helpers/utils';
import resumeConfig from '../../edit-me/config/resume-config';
import { ThemeSetting } from '../../edit-me/types/config';
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
  const baseURL = `${protocol}://${host ?? deployURL ?? ''}`;
  const siteName = `${fullName} Professional Résumé`;
  const title = `Résumé | ${fullName}`;
  const description = `Professional résumé for ${fullName}.`;

  return {
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'pdf'],
    metadataBase: new URL(baseURL),
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
      className={cn(
        albert.variable,
        jetBrainsMono.variable,
        resumeConfig.appTheme === ThemeSetting.Dark && 'dark',
      )}
    >
      <body className="space-y-12 bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
