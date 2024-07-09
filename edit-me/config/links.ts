import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiNpm,
  SiX,
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';

export const links: CMSLink[] = [
  {
    href: 'https://github.com',
    icon: SiGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.instagram.com',
    icon: SiInstagram,
    title: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.npmjs.com',
    icon: SiNpm,
    title: 'NPM',
  },
  {
    href: 'https://twitter.com',
    icon: SiX,
    title: 'X',
  },
];
