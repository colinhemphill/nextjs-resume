import { CMSPersonalInformation } from '../cms-integration/markdown/personal';

export const getFullName = (
  personalInformation: CMSPersonalInformation,
): string => {
  return `${personalInformation.attributes.givenName} ${personalInformation.attributes.familyName}`;
};

export const formatDate = (date: Date | number): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};
