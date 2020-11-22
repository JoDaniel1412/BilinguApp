
export interface IUserSimplify {
  uid: string;
  name: string;
  country: ICountry;
  learning: ILanguage[];
  teaching: ILanguage[];
}

export interface IUserDetailed {
  uid: string;
  name: string;
  age: string;
  sex: string;
  country: ICountry;
  hobbies: string[];
  contact: string[];
  learning: ILanguage[];
  teaching: ILanguage[];
}

export interface ICountry {
  name: string;
  iso: string;
}

export interface ILanguage {
  language: string;
  level: string;
}
