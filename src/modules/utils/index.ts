export const getPokemonIdFromUrl = (url: string): number => {
  const splittedUrl = url.split('/').filter(value => value);
  const id = +splittedUrl[splittedUrl.length - 1];
  if (isNaN(id)) {
    return 1;
  }
  return id;
};
