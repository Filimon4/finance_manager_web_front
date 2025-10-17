import apiAxios from "@/lib/axios";
import type { BalanceResponse } from "./balance.interface";

export const balance = async (): Promise<BalanceResponse> => {
  const response = await apiAxios.get(`/v1/account/balance`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return response.data;
};
