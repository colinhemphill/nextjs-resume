import { CMSAchievement, getAchievements } from './markdown/achievements';
import { CMSHobbies, getHobbies } from './markdown/hobbies';
import { CMSLink, getLinks } from './markdown/links';
import {
  CMSPersonalInformation,
  getPersonalInformation,
} from './markdown/personal';
import { CMSPrivateInformation } from './markdown/private';
import {
  CMSProfessionalExperience,
  getProfessionalExperiences,
} from './markdown/professional';
import { CMSSkillCategory, getSkillCategories } from './markdown/skills';

type CMS = 'markdown';

export interface CMSData {
  achievements: CMSAchievement[];
  hobbies: CMSHobbies;
  links: CMSLink[];
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
  professional: CMSProfessionalExperience[];
  skills: CMSSkillCategory[];
}

export const getCMSIntegration = async (cms: CMS): Promise<CMSData> => {
  if (cms === 'markdown') {
    return {
      achievements: await getAchievements(),
      hobbies: await getHobbies(),
      links: await getLinks(),
      personalInformation: await getPersonalInformation(),
      professional: await getProfessionalExperiences(),
      skills: await getSkillCategories(),
    };
  }
  return null;
};
