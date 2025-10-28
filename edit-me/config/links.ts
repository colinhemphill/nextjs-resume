import { SiBluesky, SiGithub, SiInstagram, SiLinkedIn, SiNpm } from '@icons';
import { CMSLink } from 'edit-me/types/cms-link';

export const links: CMSLink[] = [
  {
    href: 'https://linkedin.com',
    icon: SiLinkedIn,
    title: 'LinkedIn',
  },
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
