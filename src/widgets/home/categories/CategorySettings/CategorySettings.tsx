import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import settings from "/icons/settings.svg";
import { useCategory, useUpdateCategory } from "@/shared/api/category";
import { useEffect, useState } from "react";

interface ICategorySettings {
  id: number;
}

const CategorySettings = ({ id }: ICategorySettings) => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess: categoryLoadedSuccess,
  } = useCategory(id);

  const { mutateAsync, isPending } = useUpdateCategory();

  const [formData, setFormData] = useState({
    name: "",
    baseType: "EXPENSE",
  });

  useEffect(() => {
    if (categoryData) {
      setFormData({
        name: categoryData.name || "",
        baseType: categoryData.base_type || "EXPENSE",
      });
    }
  }, [categoryData]);

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = async () => {
    await mutateAsync({
      id: id,
      baseType: formData.baseType as "EXPENSE" | "INCOME",
      name: formData.name,
    });
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
          <SheetTitle>Категория</SheetTitle>
          <SheetDescription>Изменить категорию</SheetDescription>
        </SheetHeader>
        <div className="space-y-4 p-4">
          {categoryLoading && <div className="text-center">Загрузка...</div>}

          {categoryLoadedSuccess && categoryData && (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Название</Label>
                <Input
                  id="name"
                  defaultValue={categoryData.name}
                  onChange={(e) => {
                    handleInputChange("name", e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="baseType">Тип</Label>
                <Select
                  value={formData.baseType}
                  onValueChange={(value: "EXPENSE" | "INCOME") =>
                    handleInputChange("baseType", value)
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
                <Label>Создана</Label>
                <div className="col-span-3 text-sm text-gray-600">
                  {new Date(categoryData.created_at).toLocaleString("ru-RU")}
                </div>
              </div>
            </>
          )}
        </div>
        <SheetFooter>
          <Button
            className="w-full cursor-pointer"
            type="submit"
            onClick={onSubmit}
            disabled={isPending}
          >
            {isPending ? "Сохарнение..." : "Сохранить изминения"}
          </Button>
          <SheetClose className="cursor-pointer">Закрыть</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CategorySettings;
