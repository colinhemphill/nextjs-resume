import {
  allAchievements,
  allProfessionalExperiences,
  IsoDateTimeString,
  personal,
} from '@content';
import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const initials = `${personal.givenName.slice(0, 1)}${personal.familyName.slice(0, 1)}`;

export const sortedProfessionalExperiences =
  allProfessionalExperiences.toSorted((a, b) => {
    const earliestStartDateA = Math.min(
      ...a.titles.map((title) => new Date(title.startDate).getTime()),
    );
    const earliestStartDateB = Math.min(
      ...b.titles.map((title) => new Date(title.startDate).getTime()),
    );

    return earliestStartDateB - earliestStartDateA;
  });

export const sortedAchievements = allAchievements.toSorted((a, b) => {
  return b.completionYear - a.completionYear;
});

export function getFormattedDate(dateTimeString: IsoDateTimeString): string {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  });
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
