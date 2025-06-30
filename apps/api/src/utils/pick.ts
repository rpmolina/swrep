export const pick = <T extends object>(obj: T, ...keys: (keyof T)[]) => {
  const entries = keys
    .filter((key) => key in obj)
    .map((key) => [key, obj[key]]);

  return Object.fromEntries(entries) as Pick<T, keyof T>;
};
