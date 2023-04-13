import { personal } from '@content';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const formatDate = (date: Date | number): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};
