import { Button } from "../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogPortal } from "@radix-ui/react-dialog";
import AddCategoryForm from "../forms/AddCategoryForm/AddCategoryForm";

const AddCategoryDialog = () => {
  const [open, setOpen] = useState(false);

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
          <AddCategoryForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddCategoryDialog;
