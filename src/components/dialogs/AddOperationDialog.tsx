import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui";
import { AddOperationForm } from "../forms/AddOperationForm/AddOperationForm";

const AddOperationDialog = () => {
  const [open, setOpen] = useState(false);

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
          <AddOperationForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddOperationDialog;
