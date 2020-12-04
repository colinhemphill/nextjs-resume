export const getFullName = (
  personalInformation: CMSPersonalInformation<unknown>,
): string => {
  return `${personalInformation.given_name} ${personalInformation.family_name}`;
};

export const formatDate = (date: Date | number): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
};
