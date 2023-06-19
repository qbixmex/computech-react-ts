export const createSlug = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(' ', '-')
    .replace('_', '-');
};
