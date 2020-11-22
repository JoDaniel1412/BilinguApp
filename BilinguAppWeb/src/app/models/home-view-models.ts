
export interface IUserSimplify {
  name: string;
  country: ICountry;
  learning: string[];
  teaching: string[];
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
  name: string;
  level: string;
}
