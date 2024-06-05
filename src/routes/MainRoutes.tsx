import { RouterProvider } from "react-router-dom";
import { router } from ".";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { CheckStatus } from "@/interfaces";

export default function MainRoutes() {
  const { verifyToken, checking } = useAuth();

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (checking === CheckStatus.Pending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        <h1 className="text-3xl font-bold text-gray-900">Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
