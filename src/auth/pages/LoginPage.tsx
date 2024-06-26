import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "../components/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Card className="max-w-[400px] w-full">
      <CardHeader>
        <CardTitle>Login - Chat App</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="link" className="text-slate-400">
            <Link to="/auth/register" className="ml-1">
              ¿No tienes una cuenta? Regístrate
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
