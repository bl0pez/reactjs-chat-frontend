import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuthContext } from "@/hooks";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }),
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});

export type RegisterFormValues = z.infer<typeof formSchema>;

export const RegisterForm = () => {

  const { register } = useAuthContext();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      await register(values);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-right" });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nombre
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
        <Button type="submit" size="full">
          Registrarse
        </Button>
      </form>
    </Form>
  );
};
