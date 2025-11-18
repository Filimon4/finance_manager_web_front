import { Button } from "@/components/ui";
import { useExportData } from "@/shared/api/exportData/useExportData.mutation";

const Me = () => {
  const { mutateAsync, isPending } = useExportData();

  const onExitProfile = () => {
    localStorage.removeItem("accessToken");
    document.location.href = "auth/signin";
  };

  const onExportDataProfile = () => {
    mutateAsync();
  };

  return (
    <>
      <p>Профиль</p>
      <div className="w-full h-full flex flex-col gap-5 overflow-auto">
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onExportDataProfile()}
          variant={"borderedCustom1"}
          disabled={isPending}
        >
          <span>Экспортировать отчёт</span>
        </Button>
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onExitProfile()}
          variant={"borderedCustomRed"}
        >
          <span>Выйти из аккаунта</span>
        </Button>
      </div>
    </>
  );
};

export default Me;
