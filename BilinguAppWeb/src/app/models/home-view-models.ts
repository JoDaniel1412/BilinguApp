
export interface IUserSimplify {
  name: string;
  country: ICountry;
  learning: string[];
  teaching: string[];
}

export interface IUserDetailed {
  name: string;
  age: number;
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
