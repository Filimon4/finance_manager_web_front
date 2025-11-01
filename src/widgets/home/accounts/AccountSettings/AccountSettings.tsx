import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import settings from "/icons/settings.svg";
import { Button, ComboboxSearch, Input, Label } from "@/components/ui";
import { useAccount, useUpdateAccount } from "@/shared/api/account";
import { useEffect, useState } from "react";
import { useCurrencies } from "@/shared/api/currencies/useCurrencies.query";
import { useQueryClient } from "@tanstack/react-query";

export interface IAccountSettings {
  id: number;
}

const AccountSettings = ({ id }: IAccountSettings) => {
  const queryClient = useQueryClient();
  const [sheetOpen, setSheetOpen] = useState(false);
  const {
    data: accountData,
    isLoading: accountLoading,
    isSuccess: accountLoadedSuccess,
  } = useAccount(id);

  const {
    data: currencies,
    isLoading: currenciesLoading,
    isSuccess: currenciesLoadedSuccess,
  } = useCurrencies();

  const { mutateAsync, isPending } = useUpdateAccount();

  const [currCurrency, setCurrCurrency] = useState<number>(NaN);

  const [formData, setFormData] = useState({
    name: accountData?.name || "",
    main: accountData?.main || false,
    currency_id: accountData?.currency_id || 1,
  });

  useEffect(() => {
    if (!accountLoadedSuccess) return;

    setFormData({
      name: accountData.name,
      main: accountData.main,
      currency_id: accountData.currency_id,
    });
  }, [accountLoadedSuccess, accountData]);

  useEffect(() => {
    if (!currenciesLoadedSuccess) return;
    if (!accountLoadedSuccess) return;

    const currency = currencies.find(
      (curr) => curr.id === accountData.currency_id
    );

    if (!currency) return;

    setCurrCurrency(currency.id);
  }, [currenciesLoadedSuccess, accountLoadedSuccess, accountData, currencies]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (value: number) => {
    setFormData((prev) => ({
      ...prev,
      currency_id: value,
    }));
  };

  const handleSubmit = async () => {
    await mutateAsync({
      id: id,
      name: formData.name,
      currency_id: currCurrency,
    });
    setSheetOpen(false);
  };

  const handleMainSubmit = async () => {
    if (!accountLoadedSuccess) return;

    await mutateAsync({
      id: id,
      name: accountData.name,
      currency_id: accountData.currency_id,
      main: true,
    });
    queryClient.invalidateQueries({ queryKey: ["balance"] });
    setSheetOpen(false);
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <img
          src={settings}
          alt="Настройки"
          className="w-[30px] cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Счёт</SheetTitle>
          <SheetDescription>Изменить счёт</SheetDescription>
        </SheetHeader>
        {accountLoading &&
        !accountLoadedSuccess &&
        currenciesLoading &&
        !currenciesLoadedSuccess ? (
          <>Подгрузка данных...</>
        ) : (
          <div className="space-y-4 p-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Название счёта</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Введите название счёта"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="currency_id">Валюта</Label>
              {currencies && (
                <>
                  <ComboboxSearch
                    searchPlaceholder="Валюта"
                    onClick={(i) => {
                      setCurrCurrency(currencies[i].id);
                      handleSelectChange(i);
                    }}
                    data={currencies.map((curr) => ({
                      label: curr.name,
                      value: curr.symbol,
                      active: currCurrency == curr.id,
                    }))}
                    buttonClassName="w-full"
                  />
                </>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label>Дата создания</Label>
              <Input
                value={new Date(
                  String(accountData?.created_at)
                ).toLocaleString()}
                disabled
              />
            </div>
          </div>
        )}
        <SheetFooter>
          <Button
            className="w-full"
            type="submit"
            onClick={handleSubmit}
            disabled={accountLoading}
          >
            {isPending ? "Сохарнение..." : "Сохранить изминения"}
          </Button>
          <Button
            className="w-full"
            onClick={handleMainSubmit}
            disabled={accountLoading}
          >
            {isPending ? "Установка..." : "Поставить гланым счётом"}
          </Button>
          <SheetClose className="cursor-pointer">Закрыть</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AccountSettings;
