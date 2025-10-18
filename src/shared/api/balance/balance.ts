import apiAxios from "@/lib/axios";
import type { IBalanceResponse } from "./balance.interface";

export const balance = async (): Promise<IBalanceResponse> => {
  const response = await apiAxios.get(`/v1/account/balance`, {
    withCredentials: true,
  });

  return response.data;
};
