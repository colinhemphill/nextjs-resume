import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface PersonalMarkdownAttributes {
  location: string;
  familyName: string;
  givenName: string;
  title?: string;
  twitterUsername?: string;
}

export interface CMSPersonalInformation {
  attributes: PersonalMarkdownAttributes;
  html: string;
}

const basePath = process.cwd();
const personalPath = path.join(basePath, 'edit-me', 'cms', 'personal.md');

export const getPersonalInformation =
  async (): Promise<CMSPersonalInformation> => {
    const file = await fs.readFile(personalPath);

    const { attributes, body } = parseFrontMatter<PersonalMarkdownAttributes>(
      file.toString(),
    );

    invariant(attributes.location, 'personal.md missing "location" attribute.');
    invariant(
      attributes.familyName,
      'personal.md missing "familyName" attribute.',
    );
    invariant(
      attributes.givenName,
      'personal.md missing "givenName" attribute.',
    );

    const html = marked(body);

    return {
      attributes,
      html,
    };
  };
