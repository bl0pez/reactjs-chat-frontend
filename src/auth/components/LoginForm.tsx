import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner"
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/hooks";

const formSchema = z.object({
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { login } = useAuthContext();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-right" });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="prueba@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="full"
          disabled={form.formState.isSubmitting}
        >
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
};
