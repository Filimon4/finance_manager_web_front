import upBorderd from "/icons/up_bordered.svg";
import downBorderd from "/icons/down_bordered.svg";
import { useBalance } from "@/shared/api/balance";
import { useAccountMain } from "@/shared/api/account";
import {
  currencyById,
  type ICurrenciesResponse,
} from "@/shared/api/currencies";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const queryClient = useQueryClient();
  const { data: data } = useBalance();
  const {
    data: mainData,
    isSuccess: isSuccessAccountMain,
    isFetching: isFetchingAccountMain,
  } = useAccountMain();

  const [currencyData, setCurrencyData] = useState<ICurrenciesResponse>();

  useEffect(() => {
    if (mainData?.currency_id) {
      queryClient
        .fetchQuery({
          queryKey: ["currency", mainData.currency_id],
          queryFn: () => currencyById(mainData.currency_id),
        })
        .then((data) => setCurrencyData(data));
    }
  }, [isSuccessAccountMain, queryClient, isFetchingAccountMain]);

  const { totalIncome, totalExpense, totalProfit } = data?.overview ?? {
    totalIncome: 0,
    totalExpense: 0,
    totalProfit: 0,
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[200px]">
      <div>
        <div className="flex justify-center items-center gap-2 flex-col">
          <p className="text-xl">Баланс</p>
          <p className="flex gap-2 text-2xl">
            <span>{totalProfit.toLocaleString()}</span>
            {currencyData?.symbol_native}
          </p>
        </div>
      </div>
      <div className="w-full h-[3px] bg-black rounded-4xl" />
      <div className="w-full gap-5 flex justify-between flex-col">
        <div className="flex justify-between items-center gap-3">
          <p>Расход</p>
          <div className="flex justify-between items-center gap-2">
            <img src={downBorderd} alt="Расход" className="w-[30px]" />
            <p>{totalExpense.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3">
          <p>Доход</p>
          <div className="flex justify-between items-center gap-2">
            <img src={upBorderd} alt="Доход" className="w-[30px]" />
            <p>{totalIncome.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
