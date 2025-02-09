import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiNpm,
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/cms-link';

export const links: CMSLink[] = [
  {
    href: 'https://github.com',
    icon: SiGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.npmjs.com',
    icon: SiNpm,
    title: 'NPM',
  },
  {
    href: 'https://bsky.app',
    icon: SiBluesky,
    title: 'Bluesky',
  },
  {
    href: 'https://www.instagram.com',
    icon: SiInstagram,
    title: 'Instagram',
  },
];
