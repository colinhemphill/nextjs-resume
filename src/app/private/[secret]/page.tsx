import { notFound } from 'next/navigation';
import { Header } from '../../../components/Header/Header';

const privateKey = process.env.PRIVATE_KEY;

// @ts-expect-error Server Component
const Page: React.FC<PageProps> = async ({ params }) => {
  const { secret } = params;

  if (secret !== privateKey) {
    return notFound();
  }

  return (
    <>
      <Header secret={secret} />

      {/* <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe personalInformation={data.personalInformation} />
          <ContactInformation
            personalInformation={data.personalInformation}
            privateInformation={privateInformation}
          />
        </div>

        <div className="mt-12">
          <Skills skills={data.skills} />
        </div>

        <div className="mt-12">
          <Professional professionalExperience={data.professional} />
        </div>

        <div className="mt-12">
          <Achievements achievements={data.achievements} />
        </div>

        <div className="mt-12">
          <HobbiesAndInterests hobbies={data.hobbies} />
        </div>
      </div>

      <Footer
        links={data.links}
        personalInformation={data.personalInformation}
      /> */}
    </>
  );
};

export default Page;
