import upBorderd from "/icons/up_bordered.svg";
import downBorderd from "/icons/down_bordered.svg";
import { useBalance } from "@/shared/api/balance";

const Profile = () => {
  const { data } = useBalance();

  const { totalIncome, totalExpense, totalProfit } = data?.overview ?? {
    totalIncome: 0,
    totalExpense: 0,
    totalProfit: 0,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[200px]">
      {/* Баланс */}
      <div>
        <div className="flex justify-center items-center gap-2 flex-col">
          <p className="text-xl">Баланс</p>
          <p className="flex gap-2 text-2xl">
            <span>{totalProfit.toLocaleString()}</span>₽
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[3px] bg-black rounded-4xl" />
      {/* Доход / Расход */}
      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center flex-col">
          <p>Расход</p>
          <div className="flex justify-between items-center gap-5">
            <img src={downBorderd} alt="Расход" className="w-[30px]" />
            <p>{totalExpense.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <p>Доход</p>
          <div className="flex justify-between items-center gap-5">
            <img src={upBorderd} alt="Доход" className="w-[30px]" />
            <p>{totalIncome.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
