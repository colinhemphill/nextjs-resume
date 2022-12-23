import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../../edit-me/cms/links';

export interface CMSLink {
  href: string;
  icon?: IconDefinition;
  title: string;
}

export const getLinks = async (): Promise<CMSLink[]> => {
  return new Promise((resolve) => {
    return resolve(links);
  });
};
