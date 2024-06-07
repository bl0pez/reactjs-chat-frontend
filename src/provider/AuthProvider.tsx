import { useCallback, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { fetchConToken, fetchSinToken, getLocalStorage, removeLocalStorage, setLocalStorage } from "@/helpers";
import { AuthResponse, CheckStatus, LoginData, RegisterData, User, UserState } from "@/interfaces";

const initialUserState: User = {
  id: null,
  createdAt: null,
  email: null,
  name: null,
  online: false,
  updatedAt: null,
};

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<UserState>({ user: initialUserState });
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [checking, setChecking] = useState<CheckStatus>(CheckStatus.Pending);

  const login = async ({ email, password }: LoginData) => {
    const { data, errorMessage } = await fetchSinToken<AuthResponse>({
      endpoint: "auth/login",
      method: "POST",
      data: { email, password },
    });

    if (data !== null) {
      const { user, token } = data;
      setAuth({ user: user });
      setSocketConnected(true);
      setLocalStorage<string>({
        key: "token",
        value: token,
      });
      setChecking(CheckStatus.LoggedIn);
      return;
    }

    throw new Error(errorMessage);
  };

  const register = async ({ email, password, name }: RegisterData) => {
    const { data, errorMessage } = await fetchSinToken<AuthResponse>({
      endpoint: "auth/register",
      method: "POST",
      data: { email, password, name },
    });

    if (data !== null) {
      setAuth({ user: data.user });
      setSocketConnected(true);
      setLocalStorage<string>({
        key: "token",
        value: data.token,
      });
      setChecking(CheckStatus.LoggedIn);
      return;
    }

    throw new Error(errorMessage);
  };

  const verifyToken = useCallback(async () => {
    const token = getLocalStorage<string>({ key: "token" });

    if (!token) {
      logout();
      return;
    }

    const { data } = await fetchConToken<AuthResponse>({
      endpoint: "auth/renewToken",
      method: "GET",
    });

    if (data !== null) {
      setAuth({ user: data.user });
      setSocketConnected(true);
      setLocalStorage<string>({
        key: "token",
        value: data.token,
      });
      setChecking(CheckStatus.LoggedIn);
      return;
    }

    logout();
  }, []);

  const logout = () => {
    removeLocalStorage({
      key: "token",
    });
    setSocketConnected(false);
    setAuth({ user: initialUserState });
    setChecking(CheckStatus.LoggedOut);
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        checking,
        socketConnected,
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
