export const createSlug = (text: string): string => {
  const lowerCaseText = text.toLowerCase();
  const replacedSpacesWithDashes = lowerCaseText.replace(' ', '-');
  const replacedUnderscoreWithDashes = replacedSpacesWithDashes.replace('_', '-');
  const output = replacedUnderscoreWithDashes.trim();
  return output;
};
