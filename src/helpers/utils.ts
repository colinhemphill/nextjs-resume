import {
  allAchievements,
  allProfessionalExperiences,
  personal,
} from '@content';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const sortedProfessionalExperiences = allProfessionalExperiences.sort(
  (a, b) => {
    const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''));
    const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''));
    return aOrderNumber - bOrderNumber;
  },
);

export const sortedAchievements = allAchievements.sort((a, b) => {
  const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''));
  const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''));
  return aOrderNumber - bOrderNumber;
});
