import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface EducationalExperienceMarkdownAttributes {
  achievement: string;
  completionYear: string;
  institution: string;
}

export interface CMSEducationalExperience {
  attributes: EducationalExperienceMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const educationPath = path.join(
  basePath,
  'edit-me',
  'cms',
  'educationalExperiences',
);

export const getEducationalExperiences = async (): Promise<
  CMSEducationalExperience[]
> => {
  const dir = (await fs.readdir(educationPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(educationPath, filename));
      const { attributes, body } =
        parseFrontMatter<EducationalExperienceMarkdownAttributes>(
          file.toString(),
        );

      invariant(
        attributes?.achievement,
        `${filename} missing "achievement" attribute.`,
      );
      invariant(
        attributes?.completionYear,
        `${filename} missing "completionYear" attribute.`,
      );
      invariant(
        attributes?.institution,
        `${filename} missing "institution" attribute.`,
      );

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
