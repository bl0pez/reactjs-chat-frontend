import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@/auth/layouts/AuthLayout";
import LoginPage from "@/auth/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
