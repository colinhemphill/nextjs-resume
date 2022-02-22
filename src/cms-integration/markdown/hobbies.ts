import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';

export interface CMSHobbies {
  html: string;
}

const hobbiesPath = path.join('cms', 'hobbies.md');

export const getHobbies = async (): Promise<CMSHobbies> => {
  const file = await fs.readFile(hobbiesPath);

  const html = marked(file.toString());

  return {
    html,
  };
};
