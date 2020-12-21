import { CMSLink } from '../_types/CMSLink';
import {
  contentfulCMSLink,
  contentfulCMSName,
  contentfulGetEducationalExperiences,
  contentfulGetLinks,
  contentfulGetPersonalInformation,
  contentfulGetPrivateInformation,
  contentfulGetProfessionalExperiences,
  contentfulGetSkills,
  contentfulParseDate,
  ContentfulRichText,
  ContentfulRichTextComponent,
} from './contentful';
import {
  prismicCMSLink,
  prismicCMSName,
  prismicGetEducationalExperiences,
  prismicGetLinks,
  prismicGetPersonalInformation,
  prismicGetPrivateInformation,
  prismicGetProfessionalExperiences,
  prismicGetSkills,
  prismicParseDate,
  PrismicRichText,
  PrismicRichTextComponent,
} from './prismic';

export type SupportedCMS = 'prismic' | 'contentful';
type RichText = PrismicRichText | ContentfulRichText;

export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;
export const getCMSName: () => SupportedCMS = () =>
  process.env.NEXT_PUBLIC_CMS_INTEGRATION as SupportedCMS;

export interface CMSIntegration {
  RichTextComponent: ({ richText: unknown }) => JSX.Element;
  getEducationalExperiences: () => Promise<
    CMSEducationalExperience<RichText>[]
  >;
  getLinks: () => Promise<CMSLink[]>;
  getPersonalInformation: () => Promise<CMSPersonalInformation<RichText>>;
  getPrivateInformation: () => Promise<CMSPrivateInformation<RichText>[]>;
  getProfessionalExperiences: () => Promise<
    CMSPRofessionalExperience<RichText>[]
  >;
  getSkills: () => Promise<CMSSkills[]>;
  link: string;
  name: string;
  parseDate: (date: string) => Date;
}

export const getCMSIntegration = (
  cms: SupportedCMS = getCMSName(),
): CMSIntegration => {
  if (cms === 'prismic') {
    return {
      RichTextComponent: PrismicRichTextComponent,
      getEducationalExperiences: prismicGetEducationalExperiences,
      getLinks: prismicGetLinks,
      getPersonalInformation: prismicGetPersonalInformation,
      getPrivateInformation: prismicGetPrivateInformation,
      getProfessionalExperiences: prismicGetProfessionalExperiences,
      getSkills: prismicGetSkills,
      link: prismicCMSLink,
      name: prismicCMSName,
      parseDate: prismicParseDate,
    };
  } else if (cms === 'contentful') {
    return {
      RichTextComponent: ContentfulRichTextComponent,
      getEducationalExperiences: contentfulGetEducationalExperiences,
      getLinks: contentfulGetLinks,
      getPersonalInformation: contentfulGetPersonalInformation,
      getPrivateInformation: contentfulGetPrivateInformation,
      getProfessionalExperiences: contentfulGetProfessionalExperiences,
      getSkills: contentfulGetSkills,
      link: contentfulCMSLink,
      name: contentfulCMSName,
      parseDate: contentfulParseDate,
    };
  }
};
