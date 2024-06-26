export interface ReqLogin {
  email: string;
  password: string;
}

export interface ResLogin {
  data: { access_token: string; refresh_token: string };
  user: User;
  token: Token;
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  email: string;
  phone: string;
  avatar: null;
  role: string;
  card_id: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  expiresIn: string;
}

export interface ReqRegister {
  username: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
}

export interface ResRegister {
  username: string;
  email: string;
  password: string;
}

export interface ISession {
  id: string;
  username: string;
  token: Token;
}

export interface ResRefreshToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface ResUploadFiles {
  urls: string[];
}

export interface ReqUploadFiles {
  files: File[];
}
