import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "@/hooks/useAuth";

export default function ChatLayout() {

  const { user } = useAuth();

  if (!user?.id) return <Navigate to="/auth/login" />;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-auto">
      <Outlet />
      </main>
    </div>
  );
}