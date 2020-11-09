
export interface IUsersOrigin {
  id: string;
  name: string;
  country: string;
}

export interface IUsersPerCountry {
  country: string;
  users: number;
}

export interface IUsersLanguage {
  language: string;
  users: number;
}
