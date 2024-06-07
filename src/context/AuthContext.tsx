import { AuthState } from "@/interfaces";
import { createContext } from "react";

export const AuthContext = createContext<AuthState>({} as AuthState);


