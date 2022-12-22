import { links } from '../../../edit-me/cms/links';

export interface CMSLink {
  href: string;
  icon?: JSX.Element;
  title: string;
}

export const getLinks = async (): Promise<CMSLink[]> => {
  return new Promise((resolve) => {
    return resolve(links);
  });
};
