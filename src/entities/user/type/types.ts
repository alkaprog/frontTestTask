export type User = {
  id: number;
  name: string;
  city: string;
  photo: string;
  countOfCartItems: number;
};

export type UserAuthTokens = {
  access_token: string;
  refresh_token: string;
};
