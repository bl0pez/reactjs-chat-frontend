import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/sonner"
import MainRoutes from "./routes/MainRoutes";

export const App = () => {
  return (
    <AuthProvider>
      <MainRoutes />
      <Toaster richColors />
    </AuthProvider>
  );
};
