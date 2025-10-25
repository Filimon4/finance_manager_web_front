import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateCategory } from "@/shared/api/category/useCreateCategory.mutation";
import { createCategorySchema } from "./schema";
import type { ICategoryCreateRequest } from "@/shared/api/category";
import upBorderd from "/icons/up_bordered.svg";
import downBorderd from "/icons/down_bordered.svg";
import {
  CardTitle,
  EmptyCard,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui";

function AddCategoryForm({ onSuccess }: { onSuccess: () => void }) {
  const createCategory = useCreateCategory();

  const form = useForm({
    validators: {
      onSubmit: createCategorySchema,
    },
    defaultValues: {
      baseType: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await createCategory.mutateAsync(value as ICategoryCreateRequest);
      onSuccess();
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <form.Field
          name="baseType"
          validators={{ onChange: createCategorySchema.shape.baseType }}
        >
          {(field) => (
            <EmptyCard className="flex flex-col gap-1">
              <CardTitle className="text-sm font-normal">
                Базовый тип операции
              </CardTitle>
              <ToggleGroup
                type="single"
                value={field.state.value}
                onValueChange={(val) => val && field.handleChange(val)}
                className="flex justify-between w-full gap-2 mt-2"
              >
                <ToggleGroupItem
                  value="EXPENSE"
                  aria-label="Расход"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                    field.state.value === "expense"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <img src={downBorderd} alt="Расход" className="w-[30px]" />
                  Расход
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="INCOME"
                  aria-label="Доход"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                    field.state.value === "income"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <img src={upBorderd} alt="Доход" className="w-[30px]" />
                  Доход
                </ToggleGroupItem>
              </ToggleGroup>
            </EmptyCard>
          )}
        </form.Field>

        <form.Field
          name="name"
          validators={{ onChange: createCategorySchema.shape.name }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                placeholder="Название"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300"
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
              disabled={!canSubmit || isSubmitting}
              className="w-full rounded-full shadow-sm mt-2"
            >
              {isSubmitting ? "Добавление..." : "Добавить категорию"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

export default AddCategoryForm;
