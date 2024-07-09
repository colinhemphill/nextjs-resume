import {
  allAchievements,
  allProfessionalExperiences,
  personal,
  PreviousTitle,
} from '@content';

export const fullName = `${personal.givenName} ${personal.familyName}`;

export const sortedProfessionalExperiences = allProfessionalExperiences.sort(
  (a, b) => {
    const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''));
    const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''));
    return aOrderNumber - bOrderNumber;
  },
);

export const sortedPreviousTitles = (titles: PreviousTitle[]) =>
  titles?.sort((a, b) => {
    const aOrderNumber = parseInt(a.startDate.replace(/^\D+/g, ''));
    const bOrderNumber = parseInt(b.startDate.replace(/^\D+/g, ''));
    return bOrderNumber - aOrderNumber;
  });

export const sortedAchievements = allAchievements.sort((a, b) => {
  const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''));
  const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''));
  return aOrderNumber - bOrderNumber;
});
