import {
  allAchievements,
  allProfessionalExperiences,
  personal,
  PreviousTitle,
} from '@content';

export const fullName = `${personal.givenName} ${personal.familyName}`;

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

export const sortedPreviousTitles = (
  titles: PreviousTitle[],
): PreviousTitle[] =>
  titles.sort((a, b) => {
    const aOrderNumber = Number.parseInt(a.startDate.replaceAll(/^\D+/g, ''));
    const bOrderNumber = Number.parseInt(b.startDate.replaceAll(/^\D+/g, ''));
    return bOrderNumber - aOrderNumber;
  });

export const sortedAchievements = allAchievements.sort((a, b) => {
  const aOrderNumber = Number.parseInt(
    a._raw.sourceFileName.replaceAll(/^\D+/g, ''),
  );
  const bOrderNumber = Number.parseInt(
    b._raw.sourceFileName.replaceAll(/^\D+/g, ''),
  );
  return aOrderNumber - bOrderNumber;
});
