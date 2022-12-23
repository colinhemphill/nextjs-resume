import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import AboutMe from '../components/Articles/AboutMe';
import Achievements from '../components/Articles/Achievements';
import { ContactInformation } from '../components/Articles/ContactInformation';
import { HobbiesAndInterests } from '../components/Articles/HobbiesAndInterests';
import Professional from '../components/Articles/Professional';
import Skills from '../components/Articles/Skills';

// @ts-expect-error Server Component
const Page: React.FC<PageProps> = async ({ params, searchParams }) => {
  const data = await getCMSIntegration('markdown');

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AboutMe personalInformation={data.personalInformation} />
        <ContactInformation personalInformation={data.personalInformation} />
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
  );
};

export default Page;
