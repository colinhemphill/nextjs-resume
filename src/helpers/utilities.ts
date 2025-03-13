import {
  allAchievements,
  allProfessionalExperiences,
  personal,
} from '@content';
import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const initials = `${personal.givenName.slice(0, 1)}${personal.familyName.slice(0, 1)}`;

export const sortedProfessionalExperiences = allProfessionalExperiences.sort(
  (a, b) => {
    const aOrderNumber = Number.parseInt(
      a._raw.sourceFileName.replaceAll(/^\D+/g, ''),
    );
    const bOrderNumber = Number.parseInt(
      b._raw.sourceFileName.replaceAll(/^\D+/g, ''),
    );
    return aOrderNumber - bOrderNumber;
  },
);

export const sortedAchievements = allAchievements.sort((a, b) => {
  const aOrderNumber = Number.parseInt(
    a._raw.sourceFileName.replaceAll(/^\D+/g, ''),
  );
  const bOrderNumber = Number.parseInt(
    b._raw.sourceFileName.replaceAll(/^\D+/g, ''),
  );
  return aOrderNumber - bOrderNumber;
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
