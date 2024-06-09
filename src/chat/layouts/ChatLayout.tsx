import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useAuthContext } from "@/hooks";

export default function ChatLayout() {

  const { user } = useAuthContext();

  if (!user?.id) return <Navigate to="/auth/login" />;

  return (
    <div className="flex flex-col md:flex-row h-screen">
        <Sidebar />
        <main className="flex-auto">
          <Outlet />
        </main>
    </div>
  );
}
