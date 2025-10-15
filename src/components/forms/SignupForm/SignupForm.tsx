import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { signupSchema } from "./schema";
import useSignUp from "@/shared/api/signup";

export function SignupForm() {
  const signupMutation = useSignUp();

  const form = useForm({
    validators: {
      onSubmit: signupSchema,
    },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      signupMutation.mutate(value);
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-full flex-col gap-6">
      <p className="text-2xl font-bold">Регистрация</p>

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
            onChange: signupSchema.shape.email,
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
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

        {/* Поле Пароль */}
        <form.Field
          name="password"
          validators={{
            onChange: signupSchema.shape.password,
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Придумайте пароль"
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
              {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
            </Button>
          )}
        </form.Subscribe>

        <Button variant="link" className="w-full cursor-pointer mt-2">
          <Link to="/auth/signin">Уже есть аккаунт? Войти</Link>
        </Button>
      </form>
    </div>
  );
}
