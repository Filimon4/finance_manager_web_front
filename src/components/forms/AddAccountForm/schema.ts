import { z } from "zod";

export const createAccountSchema = z.object({
  baseAmount: z.string().min(1, "Сумма обязательна"),
  currencyId: z.string().min(1, "Валюта обязятельна"),
  name: z.string().min(1, "Название обязательно"),
});

export type CreateAccountFormData = z.infer<typeof createAccountSchema>;
