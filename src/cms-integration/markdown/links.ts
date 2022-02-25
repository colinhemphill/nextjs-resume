import { IconName } from '@fortawesome/free-brands-svg-icons';
import { links } from '../../../cms/links';

export interface CMSLink {
  href: string;
  iconName: IconName;
  title: string;
}

export const getLinks = async (): Promise<CMSLink[]> => {
  return new Promise((resolve) => {
    return resolve(links);
  });
};
