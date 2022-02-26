import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface ProfessionalExperienceMarkdownAttributes {
  organization: string;
  endDate?: string;
  startDate: string;
  title: string;
}

export interface CMSProfessionalExperience {
  attributes: ProfessionalExperienceMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const professionalPath = path.join(
  basePath,
  'edit-me',
  'cms',
  'professionalExperiences',
);

export const getProfessionalExperiences = async (): Promise<
  CMSProfessionalExperience[]
> => {
  const dir = (await fs.readdir(professionalPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(professionalPath, filename));
      const { attributes, body } =
        parseFrontMatter<ProfessionalExperienceMarkdownAttributes>(
          file.toString(),
        );

      invariant(
        attributes?.organization,
        `${filename} missing "organization" attribute.`,
      );
      invariant(
        attributes?.startDate,
        `${filename} missing "startDate" attribute.`,
      );
      invariant(attributes?.title, `${filename} missing "title" attribute.`);

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
