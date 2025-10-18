import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogPortal } from "@radix-ui/react-dialog";

const AddAccountDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="borderedCustom1"
          className="w-full flex justify-center items-center cursor-pointer"
        >
          Добавить счёт
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogContent className="max-w-md rounded-2xl shadow-lg border bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Добавить счёт
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-2">
            <Input
              placeholder="Сумма"
              className="rounded-xl shadow-sm focus:ring-2 focus:ring-gray-300"
            />
            <Input
              placeholder="Стартовый баланс"
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
              Добавить счёт
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddAccountDialog;
