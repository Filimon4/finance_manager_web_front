import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Overview = () => {
  const navigate = useNavigate();

  const onCategoryClick = () => {
    navigate("/categories");
  };

  const onAccountClick = () => {
    navigate("/accounts");
  };

  const onOperationsClick = () => {
    navigate("/operations");
  };

  const onDynamicClick = () => {
    navigate("/dynamic");
  };

  const onMeClick = () => {
    navigate("/me");
  };

  return (
    <>
      <p>Обзор</p>
      <div className="w-full h-full flex flex-col gap-10">
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onCategoryClick()}
          variant={"borderedCustom1"}
        >
          <span>Категории</span>
          <span>Все {">"}</span>
        </Button>
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onAccountClick()}
          variant={"borderedCustom1"}
        >
          <span>Счета</span>
          <span>Все {">"}</span>
        </Button>
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onOperationsClick()}
          variant={"borderedCustom1"}
        >
          <span>Операции</span>
          <span>Все {">"}</span>
        </Button>
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onDynamicClick()}
          variant={"borderedCustom1"}
        >
          <span>Динамика</span>
          <span>Все {">"}</span>
        </Button>
        <Button
          className="w-full flex justify-between p-7 cursor-pointer"
          onClick={() => onMeClick()}
          variant={"borderedCustom1"}
        >
          <span>Профиль</span>
          <span>Все {">"}</span>
        </Button>
      </div>
    </>
  );
};

export default Overview;
