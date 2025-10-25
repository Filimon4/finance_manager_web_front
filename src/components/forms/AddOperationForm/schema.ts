import { z } from "zod";

export const createOperationSchema = z.object({
  type: z.enum(["INCOME", "EXPENSE", "TRANSFER"], {
    error: "Тип должен относиться к одну из трёз стандартных операций",
  }),
  name: z.string().min(1, "Название обязательно"),
  amount: z
    .number({
      error: "Сумму должны быть числом",
    })
    .int("Сумма должна быть целым числом")
    .positive("Сумма должна быть положительной"),
  bankAccountId: z.number({ error: "Веберите счёт" }),
  categoryId: z.number({ error: "Выберите категорию" }).or(z.nan()).optional(),
  description: z.string(),
});

export const createTransferOperationSchema = createOperationSchema.extend({
  toBankAccountId: z
    .number()
    .int("ID счёта для перевода должен быть целым числом")
    .positive("ID счёта для перевода должен быть положительным"),
});

export type CreateOperationFormData = z.infer<typeof createOperationSchema>;
export type CreateTransferOperationFormData = z.infer<
  typeof createTransferOperationSchema
>;

export const getSchemaByType = (
  type: string
): typeof createOperationSchema | typeof createTransferOperationSchema => {
  if (type === "TRANSFER") {
    return createTransferOperationSchema;
  }

  return createOperationSchema;
};
