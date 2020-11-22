import {ICountry, ILanguage} from '../app/models/home-view-models';

export const Learning = [
  {name: 'spanish', level: 'amateur'},
  {name: 'english', level: 'amateur'},
  {name: 'chinese', level: 'amateur'},
];

export const Teaching = [
  {name: 'japanese', level: 'pro'},
  {name: 'russian', level: 'average'},
  {name: 'portuguese', level: 'average'},
];

export const Countries = ['Japan', 'Costa Rica', 'United States', 'Spain', 'Italy', 'Chile'];

export const User = {
  uid: '',
  email: '',
  name: '',
  age: '',
  sex: '',
  country: {name: '', iso: ''},
  hobbies: ['', '', ''],
  contact: ['', '', ''],
  learning: [],
  teaching: [],
};

export const Users = [
  {name: 'Jose',
    country: {name: 'Costa Rica', iso: ''},
    learning: ['japanese', 'russian', 'portuguese'],
    teaching: ['spanish', 'english', 'chinese'],
  },
  {name: 'Jose',
    country: {name: 'United States', iso: ''},
    learning: ['japanese', 'russian', 'portuguese'],
    teaching: ['spanish', 'english', 'chinese'],
  },
  {name: 'Maria',
    country: {name: 'Chile', iso: ''},
    learning: ['japanese', 'russian', 'portuguese'],
    teaching: ['spanish', 'english', 'chinese'],
  },
  {name: 'Juan',
    country: {name: 'Italy', iso: ''},
    learning: ['japanese', 'russian', 'portuguese'],
    teaching: ['spanish', 'english', 'chinese'],
  },  {name: 'Lucia',
    country: {name: 'Argentina', iso: ''},
    learning: ['japanese', 'russian', 'portuguese'],
    teaching: ['spanish', 'english', 'chinese'],
  },
];
