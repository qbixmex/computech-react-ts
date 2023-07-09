export const createSlug = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .split(" ").join("-")
    .split("_").join('-');
};
