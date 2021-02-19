import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import * as contentful from 'contentful';
import React from 'react';
import { accessToken, apiEndpoint } from '.';
import { CMSLink } from '../_types/CMSLink';

export type ContentfulRichText = Document;
type PersonalInformation = CMSPersonalInformation<ContentfulRichText>;
type PrivateInformation = CMSPrivateInformation<ContentfulRichText>;
type ProfessionalExperience = CMSPRofessionalExperience<ContentfulRichText>;
type EducationalExperience = CMSEducationalExperience<ContentfulRichText>;

export const contentfulCMSName = 'Contentful';
export const contentfulCMSLink = 'https://www.contentful.com/';

const cmsClient = () =>
  contentful.createClient({
    accessToken,
    space: apiEndpoint,
  });

export const contentfulGetPersonalInformation = async (): Promise<PersonalInformation> => {
  const entries = await cmsClient().getEntries({
    content_type: 'personal_information',
    limit: 1,
  });
  const entry = entries.items[0];
  return { id: entry.sys.id, ...(entry.fields as PersonalInformation) };
};

export const contentfulGetPrivateInformation = async (): Promise<
  PrivateInformation[]
> => {
  const entries = await cmsClient().getEntries({
    content_type: 'private_information',
    order: 'fields.label',
  });
  const experiences = entries.items.map((entry) => ({
    id: entry.sys.id,
    ...(entry.fields as PrivateInformation),
  }));
  return experiences;
};

export const contentfulGetProfessionalExperiences = async (): Promise<
  ProfessionalExperience[]
> => {
  const entries = await cmsClient().getEntries({
    content_type: 'professional_experience',
    order: ['-fields.is_current', '-fields.end_date'],
  });
  const experiences = entries.items.map((entry) => ({
    id: entry.sys.id,
    ...(entry.fields as ProfessionalExperience),
  }));
  return experiences;
};

export const contentfulGetEducationalExperiences = async (): Promise<
  EducationalExperience[]
> => {
  const entries = await cmsClient().getEntries({
    content_type: 'educational_experience',
    order: ['-fields.year', 'fields.achievement_title'],
  });
  const experiences = entries.items.map((entry) => ({
    id: entry.sys.id,
    ...(entry.fields as EducationalExperience),
  }));
  return experiences;
};

export const contentfulGetSkills = async (): Promise<CMSSkills[]> => {
  const entries = await cmsClient().getEntries({
    content_type: 'skills',
    order: '-fields.level',
  });
  const experiences = entries.items.map((entry) => ({
    id: entry.sys.id,
    ...(entry.fields as CMSSkills),
  }));
  return experiences;
};

export const contentfulGetLinks = async (): Promise<CMSLink[]> => {
  const entries = await cmsClient().getEntries({
    content_type: 'link',
    order: 'fields.title',
  });
  const experiences = entries.items.map((entry) => ({
    id: entry.sys.id,
    ...(entry.fields as CMSLink),
  }));
  return experiences;
};

export const ContentfulRichTextComponent = ({
  richText,
}: {
  richText: ContentfulRichText;
}): JSX.Element => {
  return <>{documentToReactComponents(richText)}</>;
};

export const contentfulParseDate = (date: string): Date => {
  return new Date(Date.parse(date));
};
