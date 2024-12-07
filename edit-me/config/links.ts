import { CMSLink } from '@config-types/cms-link';
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiNpm,
} from '@icons-pack/react-simple-icons';

export const links: CMSLink[] = [
  {
    href: 'https://www.linkedin.com',
    icon: SiLinkedin,
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
