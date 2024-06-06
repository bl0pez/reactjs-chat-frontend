import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import MainRoutes from "./routes/MainRoutes";
import { SocketProvider } from "./context/SocketContext";
import { ChatProvider } from "./context/ChatContext";

export const App = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <MainRoutes />
          <Toaster richColors />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};
