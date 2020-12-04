export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;

/* Uncomment for Prismic integration */
export {
  prismicCMSLink as cmsLink,
  prismicCMSName as cmsName,
  prismicGetPersonalInformation as getPersonalInformation,
  prismicGetProfessionalExperiences as getProfessionalExperiences,
  prismicGetEducationalExperiences as getEducationalExperiences,
  prismicGetLinks as getLinks,
  prismicGetSkills as getSkills,
  prismicParseDate as parseDate,
  PrismicRichTextComponent as RichTextComponent,
} from './prismic';
export type { PrismicRichText as RichText } from './prismic';
