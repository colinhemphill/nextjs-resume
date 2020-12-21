import prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';
import {
  Date as parsePrismicDate,
  RichText,
  RichTextBlock,
} from 'prismic-reactjs';
import React from 'react';
import { accessToken, apiEndpoint } from '.';
import { CMSLink } from '../_types/CMSLink';

export type PrismicRichText = RichTextBlock[];
type PersonalInformation = CMSPersonalInformation<PrismicRichText>;
type PrivateInformation = CMSPrivateInformation<PrismicRichText>;
type ProfessionalExperience = CMSPRofessionalExperience<PrismicRichText>;
type EducationalExperience = CMSEducationalExperience<PrismicRichText>;

export const prismicCMSName = 'Prismic';
export const prismicCMSLink = 'https://prismic.io/';

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const cmsClient = (req = null): DefaultClient =>
  prismic.client(apiEndpoint, createClientOptions(req, accessToken));

export const prismicGetPersonalInformation = async (): Promise<PersonalInformation> => {
  const document = await cmsClient().getSingle('personal_information', {});
  return { id: document.id, ...document.data };
};

export const prismicGetPrivateInformation = async (): Promise<
  PrivateInformation[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'private_information'),
    {
      orderings: '[my.private_information.label]',
    },
  );
  const experiences = document.results.map((document) => ({
    id: document.id,
    ...document.data,
  }));
  return experiences;
};

export const prismicGetProfessionalExperiences = async (): Promise<
  ProfessionalExperience[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'professional_experience'),
    {
      orderings:
        '[my.professional_experience.is_current desc, my.professional_experience.end_date desc]',
    },
  );
  const experiences = document.results.map((document) => ({
    id: document.id,
    ...document.data,
  }));
  return experiences;
};

export const prismicGetEducationalExperiences = async (): Promise<
  EducationalExperience[]
> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'educational_experience'),
    {
      orderings:
        '[my.educational_experience.year desc, my.educational_experiencce.achievement_title]',
    },
  );
  const experiences = document.results.map((document) => ({
    id: document.id,
    ...document.data,
  }));
  return experiences;
};

export const prismicGetSkills = async (): Promise<CMSSkills[]> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'skills'),
    {
      orderings: '[my.skills.level desc]',
    },
  );
  const skills = document.results.map((document) => ({
    id: document.id,
    ...document.data,
  }));
  return skills;
};

export const prismicGetLinks = async (): Promise<CMSLink[]> => {
  const document = await cmsClient().query(
    prismic.Predicates.at('document.type', 'link'),
    {
      orderings: '[my.link.title]',
    },
  );
  const links = document.results.map((document) => ({
    id: document.id,
    ...document.data,
  }));
  return links;
};

export const PrismicRichTextComponent = ({
  richText,
}: {
  richText: PrismicRichText;
}): JSX.Element => {
  return <RichText render={richText} />;
};

export const prismicParseDate = (date: string): Date => {
  return parsePrismicDate(date);
};
