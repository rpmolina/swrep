import { FilterConfig } from './types';

export const peopleFilters: Record<string, FilterConfig> = {
  hair_color: {
    type: 'string',
    values: [
      'auburn',
      'black',
      'blond',
      'blonde',
      'brown',
      'grey',
      'n/a',
      'none',
      'white',
    ],
  },
  skin_color: {
    type: 'string',
    values: [
      'blue',
      'brown',
      'brown mottle',
      'dark',
      'fair',
      'gold',
      'green',
      'green-tan',
      'grey',
      'light',
      'metal',
      'mottled green',
      'orange',
      'pale',
      'red',
      'silver',
      'tan',
      'unknown',
      'white',
      'yellow',
    ],
  },
  eye_color: {
    type: 'string',
    values: [
      'black',
      'blue',
      'blue-gray',
      'brown',
      'gold',
      'green',
      'hazel',
      'orange',
      'pink',
      'red',
      'unknown',
      'white',
      'yellow',
    ],
  },
  gender: {
    type: 'string',
    strict: true,
    values: ['female', 'hermaphrodite', 'male', 'n/a', 'none'],
  },
};
