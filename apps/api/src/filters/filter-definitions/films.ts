import { FilterConfig } from './types';

export const filmsFilters: Record<string, FilterConfig> = {
  director: {
    type: 'string',
    values: ['George Lucas', 'Irvin Kershner', 'Richard Marquand'],
  },
  producer: {
    type: 'string',
    values: [
      'Gary Kurtz',
      'George Lucas',
      'Howard G. Kazanjian',
      'Rick McCallum',
    ],
  },
};
