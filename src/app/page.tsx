import AboutMe from '../components/Articles/AboutMe';
import { ContactInformation } from '../components/Articles/ContactInformation';
import Skills from '../components/Skills/Skills';
import { getCMSData } from './layout';

// @ts-expect-error Server Component
const Page: React.FC<PageProps> = async ({ params, searchParams }) => {
  const data = await getCMSData();

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AboutMe personalInformation={data.personalInformation} />
        <ContactInformation personalInformation={data.personalInformation} />
      </div>

      <div className="mt-10">
        <Skills skills={data.skills} />
      </div>
    </div>
  );
};

export default Page;
