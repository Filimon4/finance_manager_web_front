import { z } from "zod";

export const createCategorySchema = z.object({
  baseType: z.enum(["INCOME", "EXPENSE"]),
  name: z.string().min(1, "Название обязательно"),
});

export type CreateCategoryFormData = z.infer<typeof createCategorySchema>;
