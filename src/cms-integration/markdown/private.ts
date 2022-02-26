import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface PrivateInformationMarkdownAttributes {
  label: string;
}

export interface CMSPrivateInformation {
  attributes: PrivateInformationMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const privateInformationPath = path.join(
  basePath,
  'edit-me',
  'cms',
  'privateFields',
);

export const getPrivateInformation = async (): Promise<
  CMSPrivateInformation[]
> => {
  const dir = (await fs.readdir(privateInformationPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(
        path.join(privateInformationPath, filename),
      );
      const { attributes, body } =
        parseFrontMatter<PrivateInformationMarkdownAttributes>(file.toString());

      invariant(attributes?.label, `${filename} missing "label" attribute.`);

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
