import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@/auth/layouts/AuthLayout";
import LoginPage from "@/auth/pages/LoginPage";
import RegisterPage from "@/auth/pages/RegisterPage";
import ChatLayout from "@/chat/layouts/ChatLayout";
import ChatPage from "@/chat/pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      }
    ],
  },
  {
    path: "/",
    element: <ChatLayout />,
    children: [
      {
        path: "/",
        element: <ChatPage />
      }
    ]
  }
]);
