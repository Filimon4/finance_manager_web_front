import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signinSchema } from "./schema";
import { Link } from "react-router";
import useSignIn from "@/shared/api/signin";

export function SigninForm() {
  const signinMutation = useSignIn();

  const form = useForm({
    validators: {
      onSubmit: signinSchema,
    },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      signinMutation.mutate(value);
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-full flex-col gap-6">
      <p className="text-2xl font-bold">Вход</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4 w-full max-w-[300px]"
      >
        <form.Field
          name="email"
          validators={{
            onChange: signinSchema.shape.email,
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                type="email"
                placeholder="Введите вашу почту"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500">
                  {field.state.meta.errors?.[0]?.message ??
                    String(field.state.meta.errors?.[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: signinSchema.shape.password,
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                type="password"
                placeholder="Введите ваш пароль"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="w-full"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500">
                  {field.state.meta.errors?.[0]?.message ??
                    String(field.state.meta.errors?.[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              variant="outline"
              disabled={!canSubmit || isSubmitting}
              className="w-full cursor-pointer mt-2"
            >
              {isSubmitting ? "Вход..." : "Войти"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <Button variant={"link"} className="w-full cursor-pointer mt-2">
        <Link to="/auth/signup">Нет аккаунта? Зарегистрироваться</Link>
      </Button>
    </div>
  );
}
