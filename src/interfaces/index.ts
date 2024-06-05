export enum LocalStorageKeys {
  Token = "token",
}


export enum CheckStatus {
  Pending = "Pending",
  LoggedIn = "LoggedIn",
  LoggedOut = "LoggedOut",
}

export interface FetchResponse<T> {
  data: T | null;
  errorMessage?: string;
  status: number;
}

export interface ApiRequest {
  endpoint: string;
  data?: object;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  token?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  checking: CheckStatus;
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  verifyToken: () => void;
  logout: () => void;
}

export interface UserState {
  user: User | null;
}

export interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  online: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  name: string;
}
