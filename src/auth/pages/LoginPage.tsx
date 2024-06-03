import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Card className="max-w-[400px] w-full">
      <CardHeader>
        <CardTitle>
            Login - Chat App
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
