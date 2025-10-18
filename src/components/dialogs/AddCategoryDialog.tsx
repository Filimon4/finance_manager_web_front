import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { DialogPortal } from "@radix-ui/react-dialog";
import upBorderd from "/icons/up_bordered.svg";
import downBorderd from "/icons/down_bordered.svg";
import { CardTitle, EmptyCard } from "../ui";

const AddCategoryDialog = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("expense");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="borderedCustom1"
          className="w-full flex justify-center items-center cursor-pointer"
        >
          Добавить категорию
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
            </ToggleGroup>
          </EmptyCard>

          <div className="flex flex-col gap-3 mt-4">
            <Input
              placeholder="Название"
              className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300"
            />
            <Input
              placeholder="Примечание"
              className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <DialogFooter className="mt-6">
            <Button
              onClick={() => setOpen(false)}
              className="w-full rounded-full shadow-sm"
            >
              Добавить категорию
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddCategoryDialog;
