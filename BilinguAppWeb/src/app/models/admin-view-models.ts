
export interface IUsersOrigin {
  uid: string;
  name: string;
  country: {
    name: string,
    iso: string
  };
}

export interface IUsersPerCountry {
  country: string;
  users: number;
}

export interface IUsersLanguage {
  language: string;
  users: number;
}
