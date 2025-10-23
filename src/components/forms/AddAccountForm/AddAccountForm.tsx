import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAccountSchema } from "./schema";
import {
  useCreateAccount,
  type IAccountCreateRequest,
} from "@/shared/api/account";
import { ComboboxSearch } from "@/components/ui";
import { useCurrencies } from "@/shared/api/currencies/useCurrencies.query";
import { useState } from "react";
import type { ICurrenciesResponse } from "@/shared/api/currencies";

export function CreateAccountForm({ onSuccess }: { onSuccess: () => void }) {
  const createAccount = useCreateAccount();
  const {
    data: currencies,
    isLoading: currenciesLoading,
    isSuccess: currenciesSuccess,
  } = useCurrencies();
  const [currCurrency, setCurrCurrency] = useState<ICurrenciesResponse>({
    id: NaN,
    code: "",
    name: "",
    symbol: "",
    symbol_native: "",
  });

  const form = useForm({
    validators: {
      onSubmit: createAccountSchema,
    },
    defaultValues: {
      baseAmount: "",
      currencyId: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await createAccount.mutateAsync(
        value as unknown as IAccountCreateRequest
      );
      onSuccess();
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-3"
      >
        <form.Field
          name="name"
          validators={{
            onChange: createAccountSchema.shape.name,
          }}
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
          name="baseAmount"
          validators={{
            onChange: createAccountSchema.shape.baseAmount,
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Input
                id={field.name}
                placeholder="Стартовый баланс"
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

        {!currenciesLoading && currenciesSuccess && (
          <>
            <form.Field
              name="currencyId"
              validators={{
                onChange: createAccountSchema.shape.currencyId,
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <ComboboxSearch
                    searchPlaceholder="Валюта"
                    onClick={(i) => {
                      setCurrCurrency(currencies[i]);
                      field.handleChange(String(currencies[i].id));
                    }}
                    data={currencies.map((curr) => ({
                      label: curr.name,
                      value: curr.symbol,
                      active: currCurrency.id == curr.id,
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

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full rounded-full shadow-sm mt-6"
            >
              {isSubmitting ? "Добавление..." : "Добавить счёт"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
