import {ILanguage} from './home-view-models';

export interface IUsersOrigin {
  uid: string;
  name: string;
  country: {
    name: string,
    iso: string
  };
  learning: ILanguage;
}

export interface IUsersPerCountry {
  country: string;
  users: number;
}

export interface IUsersLanguage {
  language: string;
  users: number;
}
