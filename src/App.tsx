import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import MainRoutes from "./routes/MainRoutes";
import { SocketProvider } from "./context/SocketContext";

export const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <MainRoutes />
        <Toaster richColors />
      </SocketProvider>
    </AuthProvider>
  );
};
