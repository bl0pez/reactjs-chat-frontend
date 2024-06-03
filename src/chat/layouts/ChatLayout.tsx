import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function ChatLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-auto">
      <Outlet />
      </main>
    </div>
  );
}