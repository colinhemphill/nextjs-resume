import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface AchievementMarkdownAttributes {
  achievement: string;
  completionYear: number;
  institution: string;
}

export interface CMSAchievement {
  attributes: AchievementMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const achievements = path.join(basePath, 'edit-me', 'cms', 'achievements');

export const getAchievements = async (): Promise<CMSAchievement[]> => {
  const dir = (await fs.readdir(achievements)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(achievements, filename));
      const { attributes, body } =
        parseFrontMatter<AchievementMarkdownAttributes>(file.toString());

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
