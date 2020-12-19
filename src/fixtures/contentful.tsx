import { BLOCKS } from '@contentful/rich-text-types';
import { ContentfulRichText } from '../cms/contentful';
import { CMSLink } from '../_types/CMSLink';

export const educationalExperiences: CMSEducationalExperience<ContentfulRichText>[] = [
  {
    achievement_description: {
      content: [
        {
          content: [
            {
              data: {},
              marks: [],
              nodeType: 'text',
              value: 'Test',
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    },
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

export const personalInformation: CMSPersonalInformation<ContentfulRichText> = {
  about_me_description: {
    content: [
      {
        content: [
          {
            data: {},
            marks: [],
            nodeType: 'text',
            value: 'Test',
          },
        ],
        data: {},
        nodeType: BLOCKS.PARAGRAPH,
      },
    ],
    data: {},
    nodeType: BLOCKS.DOCUMENT,
  },
  family_name: 'Body',
  given_name: 'Some',
  hobbies_and_interests: {
    content: [
      {
        content: [
          {
            data: {},
            marks: [],
            nodeType: 'text',
            value: 'Test',
          },
        ],
        data: {},
        nodeType: BLOCKS.PARAGRAPH,
      },
    ],
    data: {},
    nodeType: BLOCKS.DOCUMENT,
  },
  id: '1',
  job_title: 'Cool Person',
  location: 'Somewhere Only We Know',
};

export const professionalExperiences: CMSPRofessionalExperience<ContentfulRichText>[] = [
  {
    end_date: null,
    id: '1',
    is_current: true,
    organization_name: 'The Zebra',
    position_description: {
      content: [
        {
          content: [
            {
              data: {},
              marks: [],
              nodeType: 'text',
              value: 'Test',
            },
          ],
          data: {},
          nodeType: BLOCKS.PARAGRAPH,
        },
      ],
      data: {},
      nodeType: BLOCKS.DOCUMENT,
    },
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
