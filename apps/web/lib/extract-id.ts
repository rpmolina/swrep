export const extractId = (url: string) => {
  return url.split("/").pop();
};