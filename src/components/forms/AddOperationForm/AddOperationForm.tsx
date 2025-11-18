import { useCategories } from "@/shared/api/category";
import { useCreateOperation } from "@/shared/api/operations/useCreateOperations.mutation";
import {
  createOperationSchema,
  createTransferOperationSchema,
  getSchemaByType,
  type CreateOperationFormData,
} from "./schema";
import {
  Button,
  CardTitle,
  ComboboxSearch,
  EmptyCard,
  Input,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui";
import upBordered from "/icons/up_bordered.svg";
import downBordered from "/icons/down_bordered.svg";
import { useForm } from "@tanstack/react-form";
import { useAccounts } from "@/shared/api/account";

export function AddOperationForm({ onSuccess }: { onSuccess: () => void }) {
  const { data: categories } = useCategories({
    deleted: false,
  });
  const {
    data: accounts,
    isLoading: isAccountLoading,
    isSuccess: isAccountSuccess,
  } = useAccounts({
    deleted: false,
  });

  const createOperation = useCreateOperation();

  const form = useForm({
    validators: {
      onSubmit: (data) => {
        const filteredData = Object.entries(data.value).reduce(
          (obj, [key, val]) => {
            if (val !== undefined && !Number.isNaN(val)) {
              obj[key] = val;
            }
            return obj;
          },
          {} as Record<string, unknown>
        );

        getSchemaByType(data.value.type || "INCOME").parse(filteredData);
      },
    },
    defaultValues: {
      type: "",
      name: "",
      amount: NaN,
      categoryId: NaN,
      description: "",
      toBankAccountId: NaN,
    },
    onSubmit: async ({ value }) => {
      await createOperation.mutateAsync(value as CreateOperationFormData);
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
          name="type"
          validators={{
            onChange: (data) => {
              if (!data) return undefined;

              const result = createOperationSchema.shape.type.safeParse(
                data.value
              );
              if (!result.success) {
                return JSON.parse(result.error.message)[0]?.message;
              }
              return undefined;
            },
          }}
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
                    field.state.value === "EXPENSE"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <img src={downBordered} alt="Расход" className="w-[30px]" />
                  Расход
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="INCOME"
                  aria-label="Доход"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                    field.state.value === "INCOME"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <img src={upBordered} alt="Доход" className="w-[30px]" />
                  Доход
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="TRANSFER"
                  aria-label="Перевод"
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                    field.state.value === "TRANSFER"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <img src={upBordered} alt="Перевод" className="w-[30px]" />
                  Перевод
                </ToggleGroupItem>
              </ToggleGroup>
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500 mt-2">
                  {field.state.meta.errors?.[0]?.message ??
                    String(field.state.meta.errors?.[0])}
                </p>
              )}
            </EmptyCard>
          )}
        </form.Field>

        <form.Field
          name="name"
          validators={{ onChange: createOperationSchema.shape.name }}
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

        <form.Field
          name="amount"
          validators={{ onChange: createOperationSchema.shape.amount }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                placeholder="Сумма"
                type="number"
                value={field.state.value === 0 ? "" : field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  const parsed = parseInt(e.target.value, 10);
                  field.handleChange(isNaN(parsed) ? 0 : parsed);
                }}
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

        <form.Field
          name="categoryId"
          validators={{
            onChange: (data) => {
              if (!data) return undefined;

              const result = createOperationSchema.shape.categoryId.safeParse(
                data.value
              );
              if (!result.success) {
                return JSON.parse(result.error.message)[0]?.message;
              }
              return undefined;
            },
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <ComboboxSearch
                searchPlaceholder="Категория"
                onClick={(i: number) =>
                  categories && field.handleChange(categories[i].id)
                }
                data={
                  categories
                    ? categories.map((category) => ({
                        label: category.name,
                        value: category.name,
                        active: field.state.value === category.id,
                      }))
                    : []
                }
                buttonClassName="w-full"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500">
                  {field.state.meta.errors ?? String(field.state.meta.errors)}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => state.values.type}>
          {(type) => (
            <>
              {type === "TRANSFER" && !isAccountLoading && isAccountSuccess && (
                <>
                  <form.Field
                    name="toBankAccountId"
                    validators={{
                      onChange: (
                        getSchemaByType(
                          "TRANSFER"
                        ) as typeof createTransferOperationSchema
                      ).shape.toBankAccountId,
                    }}
                  >
                    {(field) => (
                      <div className="space-y-2">
                        <ComboboxSearch
                          searchPlaceholder="Счёт для перевода"
                          onClick={(i: number) =>
                            field.handleChange(accounts[i].id)
                          }
                          data={accounts.map((account) => ({
                            label: account.name,
                            value: account.name,
                            active: field.state.value === account.id,
                          }))}
                          buttonClassName="w-full"
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
                </>
              )}
            </>
          )}
        </form.Subscribe>

        <form.Field
          name="description"
          validators={{ onChange: createOperationSchema.shape.description }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                placeholder="Примечание"
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
              {isSubmitting ? "Добавление..." : "Добавить операцию"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
