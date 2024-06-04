import { fetchSinToken } from "@/helpers";
import {
  AuthState,
  LoginData,
  RegisterData,
  User,
  UserState,
} from "@/interfaces";
import { createContext, useCallback, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthState>({} as AuthState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<UserState>({ user: null });

  const login = async ({ email, password }: LoginData) => {
    const res = await fetchSinToken('auth/login', { email, password }, 'POST');
    console.log(res);
  };

  const register = async ({ email, password, name }: RegisterData) => {
    const res = await fetchSinToken('register', { email, password, name }, 'POST');
  };

  const verifyToken = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        login,
        register,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};