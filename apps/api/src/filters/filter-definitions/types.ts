export type FilterRange = {
  type: 'range';
  values: {
    name: string;
    range: [number, number];
  }[];
};

export type FilterString = {
  type: 'string';
  values: string[];
  strict?: boolean;
};

export type FilterConfig = FilterRange | FilterString;
