import { Elements } from 'prismic-reactjs';
import { PrismicRichText } from '../cms/prismic';
import { CMSLink } from '../_types/CMSLink';

export const educationalExperiences: CMSEducationalExperience<PrismicRichText>[] = [
  {
    achievement_description: [
      {
        spans: [],
        text: 'A description of my education',
        type: Elements.paragraph,
      },
    ],
    achievement_title: 'B.S. in Cool Person',
    id: '1',
    organization_name: 'Cool U',
    year: 2010,
  },
];

export const links: CMSLink[] = [
  {
    href: 'https://github.com/colinhemphill',
    icon_name: 'github',
    id: '1',
    title: 'GitHub',
  },
];

export const personalInformation: CMSPersonalInformation<PrismicRichText> = {
  about_me_description: [
    {
      spans: [],
      text: 'An About Me description.',
      type: Elements.paragraph,
    },
  ],
  family_name: 'Body',
  given_name: 'Some',
  hobbies_and_interests: [
    {
      spans: [],
      text: 'My hobbies.',
      type: Elements.paragraph,
    },
  ],
  id: '1',
  job_title: 'Cool Person',
  location: 'Somewhere Only We Know',
};

export const professionalExperiences: CMSPRofessionalExperience<PrismicRichText>[] = [
  {
    end_date: null,
    id: '1',
    is_current: true,
    organization_name: 'The Zebra',
    position_description: [
      {
        spans: [],
        text: 'A description of my role',
        type: Elements.paragraph,
      },
    ],
    position_title: 'My Title',
    start_date: '2018-02-15',
  },
];

export const skills: CMSSkills[] = [
  {
    id: '1',
    level: 3,
    level_name: 'Proficient',
    skills_list: 'JavaScript ES6, TypeScript, Test Writing, Making Stuff Up',
  },
];
