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
import {
  Button,
  Checkbox,
  ComboboxSearch,
  Input,
  Label,
} from "@/components/ui";
import { useAccount } from "@/shared/api/account";
import { useEffect, useState } from "react";
import { useCurrencies } from "@/shared/api/currencies/useCurrencies.query";
import type { ICurrenciesResponse } from "@/shared/api/currencies";

export interface IAccountSettings {
  id: number;
}

const AccountSettings = ({ id }: IAccountSettings) => {
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

  const [currCurrency, setCurrCurrency] = useState<ICurrenciesResponse>({
    id: NaN,
    code: "",
    name: "",
    symbol: "",
    symbol_native: "",
  });

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

    setCurrCurrency(currency);
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

  const handleSubmit = () => {
    console.log("Saving changes:", formData);
  };

  return (
    <Sheet>
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
                value={accountData?.name}
                onChange={handleInputChange}
                placeholder="Введите название счёта"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="main"
                name="main"
                checked={formData.main}
                onCheckedChange={(checked) => {
                  console.log(checked);
                  setFormData((prev) => ({
                    ...prev,
                    main: Boolean(checked),
                  }));
                }}
              />
              <Label htmlFor="main">Основной счёт</Label>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="currency_id">Валюта</Label>
              {currencies && (
                <>
                  <ComboboxSearch
                    searchPlaceholder="Валюта"
                    onClick={(i) => {
                      setCurrCurrency(currencies[i]);
                      handleSelectChange(i);
                    }}
                    data={currencies.map((curr) => ({
                      label: curr.name,
                      value: curr.symbol,
                      active: currCurrency.id == curr.id,
                    }))}
                    buttonClassName="w-full"
                  />
                </>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label>ID счёта</Label>
              <Input value={accountData?.account_id} disabled />
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
            Сохранить изминения
          </Button>
          <SheetClose className="cursor-pointer">Закрыть</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AccountSettings;
