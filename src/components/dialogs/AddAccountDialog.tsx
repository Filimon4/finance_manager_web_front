import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogPortal } from "@radix-ui/react-dialog";
import { CreateAccountForm } from "../forms/AddAccountForm/AddAccountForm";

const CreateAccountDialog = () => {
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
          <CreateAccountForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CreateAccountDialog;
