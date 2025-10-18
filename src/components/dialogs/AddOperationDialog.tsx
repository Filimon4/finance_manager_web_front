import { useState } from "react";
import {
  Button,
  CardTitle,
  ComboboxSearch,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  EmptyCard,
  Input,
  ToggleGroup,
  ToggleGroupItem,
} from "../ui";
import upBorderd from "/icons/up_bordered.svg";
import downBorderd from "/icons/down_bordered.svg";
import { useCategories, type ICategoryResponse } from "@/shared/api/categories";
import { useAccounts, type IAccountResponse } from "@/shared/api/account";

const AddOperationDialog = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("expense");
  const [selectedAccount, setSelectedAccount] = useState<IAccountResponse>();
  const [selectedCategory, setSelectedCategory] = useState<ICategoryResponse>();

  const {
    data: categories,
    isLoading: isCategoryLoading,
    isSuccess: isCategoriesSuccess,
  } = useCategories({
    deleted: false,
  });
  const {
    data: accounts,
    isLoading: isAccountLoading,
    isSuccess: isAccountSuccess,
  } = useAccounts({
    deleted: false,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="borderedCustom1"
          className="w-full flex justify-center items-center cursor-pointer"
        >
          Добавить операцию
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogContent className="max-w-md rounded-2xl shadow-lg border bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Добавить категорию
            </DialogTitle>
          </DialogHeader>

          <EmptyCard className="flex flex-col gap-1">
            <CardTitle className="text-sm font-normal">
              Базовый тип операции
            </CardTitle>
            <ToggleGroup
              type="single"
              value={type}
              onValueChange={(val) => val && setType(val)}
              className="flex justify-between w-full gap-2 mt-2"
            >
              <ToggleGroupItem
                value="expense"
                aria-label="Расход"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                  type === "expense"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white hover:bg-gray-50 text-gray-600"
                }`}
              >
                <img src={downBorderd} alt="Доход" className="w-[30px]" />
                Расход
              </ToggleGroupItem>

              <ToggleGroupItem
                value="income"
                aria-label="Доход"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                  type === "income"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white hover:bg-gray-50 text-gray-600"
                }`}
              >
                <img src={upBorderd} alt="Доход" className="w-[30px]" />
                Доход
              </ToggleGroupItem>

              <ToggleGroupItem
                value="transfer"
                aria-label="Перевод"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-medium border shadow-sm transition-all ${
                  type === "transfer"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white hover:bg-gray-50 text-gray-600"
                }`}
              >
                <img src={upBorderd} alt="Перевод" className="w-[30px]" />
                Перевод
              </ToggleGroupItem>
            </ToggleGroup>
          </EmptyCard>

          <div className="flex flex-col gap-3 mt-4">
            <Input
              placeholder="Сумма"
              className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300"
            />
            {!isAccountLoading && isAccountSuccess && (
              <>
                <ComboboxSearch
                  searchPlaceholder="Счёт"
                  onClick={(i: number) => setSelectedAccount(accounts[i])}
                  data={accounts.map((account) => ({
                    label: account.name,
                    value: account.name,
                    active: selectedAccount?.name === account.name,
                  }))}
                />
              </>
            )}
            {!isCategoryLoading && isCategoriesSuccess && (
              <>
                <ComboboxSearch
                  searchPlaceholder="Категория"
                  onClick={(i: number) => setSelectedCategory(categories[i])}
                  data={categories?.map((category) => ({
                    label: category.name,
                    value: category.name,
                    active: selectedAccount?.name === category.name,
                  }))}
                />
              </>
            )}
          </div>

          <DialogFooter className="mt-6">
            <Button
              onClick={() => {
                console.log(selectedAccount);
                console.log(selectedCategory);
                setOpen(false);
              }}
              className="w-full rounded-full shadow-sm"
            >
              Добавить операцию
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddOperationDialog;
