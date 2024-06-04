export interface LoginResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => void;
  verifyToken: () => void;
}

export interface UserState {
  user: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  online: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  name: string;
}
