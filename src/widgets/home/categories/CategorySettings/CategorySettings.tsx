import {
  Button,
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
import { useCategory } from "@/shared/api/category";

interface ICategorySettings {
  id: number;
}

const CategorySettings = ({ id }: ICategorySettings) => {
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isSuccess: categoryLoadedSuccess,
  } = useCategory(id);

  console.log(categoryData, categoryLoading, categoryLoadedSuccess);

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
          <SheetTitle>Категория</SheetTitle>
          <SheetDescription>Изменить категорию</SheetDescription>
        </SheetHeader>
        <></>
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

export default CategorySettings;
