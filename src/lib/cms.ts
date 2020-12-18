export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;

/* Uncomment for Prismic integration */
// export {
//   prismicCMSLink as cmsLink,
//   prismicCMSName as cmsName,
//   prismicGetPersonalInformation as getPersonalInformation,
//   prismicGetProfessionalExperiences as getProfessionalExperiences,
//   prismicGetEducationalExperiences as getEducationalExperiences,
//   prismicGetLinks as getLinks,
//   prismicGetSkills as getSkills,
//   prismicParseDate as parseDate,
//   PrismicRichTextComponent as RichTextComponent,
// } from './prismic';
// export type { PrismicRichText as RichText } from './prismic';

/* Uncomment for Contentful integration */
export {
  contentfulCMSLink as cmsLink,
  contentfulCMSName as cmsName,
  contentfulGetPersonalInformation as getPersonalInformation,
  contentfulGetProfessionalExperiences as getProfessionalExperiences,
  contentfulGetEducationalExperiences as getEducationalExperiences,
  contentfulGetLinks as getLinks,
  contentfulGetSkills as getSkills,
  contentfulParseDate as parseDate,
  ContentfulRichTextComponent as RichTextComponent,
} from './contentful';
export type { ContentfulRichText as RichText } from './contentful';
