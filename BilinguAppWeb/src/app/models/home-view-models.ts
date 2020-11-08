
export interface ILanguage {
  name: string;
  level: string;
}

export interface IUserSimplify {
  name: string;
  country: ICountry;
  learning: string[];
  teaching: string[];
}

export interface ICountry {
  name: string;
  iso: string;
}
