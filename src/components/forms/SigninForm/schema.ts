import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

export type SigninFormData = z.infer<typeof signinSchema>;
