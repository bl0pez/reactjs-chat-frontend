import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <Card className="max-w-[400px] w-full">
      <CardHeader>
        <CardTitle>
          Regístrate - Chat App
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="link" className="text-slate-400">
            <Link to="/auth/login" className="ml-1">
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
