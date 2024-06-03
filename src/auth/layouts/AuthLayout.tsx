import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Outlet />
    </main>
  );
}