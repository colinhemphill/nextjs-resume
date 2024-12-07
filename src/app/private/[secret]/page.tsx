import { allPrivateFields } from '@content';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import AboutMe from 'src/components/articles/about-me';
import Achievements from 'src/components/articles/achievements';
import AdditionalInfo from 'src/components/articles/additional-info';
import ContactInformation from 'src/components/articles/contact-info';
import Professional from 'src/components/articles/professional';
import Skills from 'src/components/articles/skills';
import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';
import { PageProperties } from 'src/types/page-properties';

const privateKey = process.env.PRIVATE_KEY;

export default async function Page(
  properties: PageProperties,
): Promise<ReactNode> {
  const parameters = await properties.params;
  const { secret } = parameters;

  if (secret !== privateKey) {
    return notFound();
  }

  const privateInformation = allPrivateFields;

  return (
    <>
      <Header secret={secret} />

      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe />
          <ContactInformation privateInformation={privateInformation} />
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>

        <div className="mt-12">
          <AdditionalInfo />
        </div>
      </div>

      <Footer />
    </>
  );
}
