import { getEducationalExperiences } from './markdown/educational';
import { getPersonalInformation } from './markdown/personal';
import { getProfessionalExperiences } from './markdown/professional';
import { getSkillCategories } from './markdown/skills';

type CMS = 'markdown';

const getCMSIntegration = async (cms: CMS) => {
  if (cms === 'markdown') {
    return {
      personalInformation: await getPersonalInformation(),
      professional: await getProfessionalExperiences(),
      education: await getEducationalExperiences(),
      skills: await getSkillCategories(),
    };
  }
  return null;
};

export default getCMSIntegration;
