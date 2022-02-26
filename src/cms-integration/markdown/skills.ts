import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface SkillsMarkdownAttributes {
  title: string;
}

export interface CMSSkillCategory {
  attributes: SkillsMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const skillsPath = path.join(basePath, 'edit-me', 'cms', 'skills');

export const getSkillCategories = async (): Promise<CMSSkillCategory[]> => {
  const dir = await fs.readdir(skillsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(skillsPath, filename));
      const { attributes, body } = parseFrontMatter<SkillsMarkdownAttributes>(
        file.toString(),
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
