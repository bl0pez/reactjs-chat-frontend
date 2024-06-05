import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {

  const { user } = useAuth();

  if (user?.id) return <Navigate to="/" />;

  return (
    <main className="flex min-h-screen justify-center items-center">
      <Outlet />
    </main>
  );
}