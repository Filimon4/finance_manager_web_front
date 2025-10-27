import {
  Button,
  Input,
  Label,
  SelectItem,
  SelectTrigger,
  Select,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui";
import settings from "/icons/settings.svg";
import { useOperation } from "@/shared/api/operations";
import { useEffect, useState } from "react";

interface IOperationSettings {
  id: number;
}

const OperationSettings = ({ id }: IOperationSettings) => {
  const { data, isLoading, isSuccess } = useOperation(id);

  const [formData, setFormData] = useState({
    name: "",
    amount: NaN,
    type: "",
    description: "",
  });

  useEffect(() => {
    if (!isSuccess) return;
    if (data) {
      setFormData({
        name: data.name || "",
        amount: Number(data.amount) || 0,
        type: data.type || "EXPENSE",
        description: data.description || "",
      });
    }
  }, [data, isSuccess]);

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
          <SheetTitle>Операция</SheetTitle>
          <SheetDescription>Изменить операцию</SheetDescription>
        </SheetHeader>
        <div className="p-4 space-y-4">
          {isLoading && <div className="text-center">Загрузка...</div>}

          {isSuccess && data && (
            <>
              <div className="flex flex-col gap-2">
                <Label>Название</Label>
                <Input defaultValue={formData.name} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Сумма</Label>
                <Input defaultValue={formData.amount} />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Тип</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: "EXPENSE" | "INCOME") =>
                    handleInputChange("type", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EXPENSE">Расход</SelectItem>
                    <SelectItem value="INCOME">Доход</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label>Описание</Label>
                <Input
                  id="description"
                  type="text"
                  defaultValue={formData.description}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Создана</Label>
                <div className="col-span-3 text-sm text-gray-600">
                  {new Date(data.created_at).toLocaleString("ru-RU")}
                </div>
              </div>
            </>
          )}
        </div>
        <SheetFooter>
          <Button className="w-full" type="submit">
            Сохранить изминения
          </Button>
          <SheetClose className="cursor-pointer">Закрыть</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default OperationSettings;
