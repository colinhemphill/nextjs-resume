import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer2/source-files';

export const Personal = defineDocumentType(() => ({
  name: 'Personal',
  filePathPattern: 'personal.md',
  isSingleton: true,
  fields: {
    givenName: {
      type: 'string',
      description: 'Your first name or given name',
      required: true,
    },
    familyName: {
      type: 'string',
      description: 'Your last name or family name',
      required: true,
    },
    title: {
      type: 'string',
      description: 'Your current job title or a short description of your goal',
      required: true,
    },
    location: {
      type: 'string',
      description:
        'Your general location of residence, not your personal address',
      required: true,
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'A name for the category of skills',
      required: true,
    },
  },
}));

export const ProfessionalTitle = defineNestedType(() => ({
  name: 'ProfessionalTitle',
  fields: {
    title: {
      type: 'string',
      description: 'A title at this organization',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'The year when you started the role',
      required: true,
    },
    endDate: {
      type: 'string',
      description:
        'The year when you ended the role, or empty if it is your current role',
      required: false,
    },
    description: {
      type: 'string',
      description:
        'A description of the work you did under this role, or your accomplishments that led to a promotion',
      required: false,
    },
  },
}));

export const ProfessionalExperience = defineDocumentType(() => ({
  name: 'ProfessionalExperience',
  filePathPattern: 'professionalExperiences/*.md',
  fields: {
    organization: {
      type: 'string',
      description: 'The name of the company or organization you worked with',
      required: true,
    },
    titles: {
      type: 'list',
      of: ProfessionalTitle,
      required: true,
    },
  },
}));

export const Achievement = defineDocumentType(() => ({
  name: 'Achievement',
  filePathPattern: 'achievements/*.md',
  fields: {
    achievement: {
      type: 'string',
      description:
        'The name of the degree or certification of your achievement',
      required: true,
    },
    organization: {
      type: 'string',
      description:
        'The name of the school, organization, or program you earned your achievement from',
      required: true,
    },
    completionYear: {
      type: 'number',
      description: 'The year you earned your achievement',
      required: true,
    },
  },
}));

export const AdditionalInfo = defineDocumentType(() => ({
  name: 'AdditionalInfo',
  filePathPattern: 'additionalInfo.md',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The name of the additional info section',
      required: true,
    },
  },
}));

export const PrivateField = defineDocumentType(() => ({
  name: 'PrivateField',
  filePathPattern: 'privateFields/*.md',
  fields: {
    label: {
      type: 'string',
      description: 'A label to describe the private field',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'edit-me/content',
  documentTypes: [
    Personal,
    Skill,
    ProfessionalExperience,
    Achievement,
    AdditionalInfo,
    PrivateField,
  ],
});
