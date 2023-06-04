import { allPrivateFields } from '@content';
import { notFound } from 'next/navigation';
import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from '../../../components/Header/Header';

const privateKey = process.env.PRIVATE_KEY;

const Page: React.FC<PageProps> = async ({ params }) => {
  const { secret } = params;

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
};

export default Page;
