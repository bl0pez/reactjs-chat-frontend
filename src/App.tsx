import MainRoutes from "./routes/MainRoutes";
import { Toaster } from "@/components/ui/sonner";
import { ChatProvider } from "./provider/ChatProvider";
import { AuthProvider } from "./provider/AuthProvider";
import { SocketProvider } from "./provider/SocketProvider";

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
