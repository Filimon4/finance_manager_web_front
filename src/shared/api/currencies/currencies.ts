import apiAxios from "@/lib/axios";
import type { ICurrenciesResponse } from ".";

export const currencies = async (): Promise<ICurrenciesResponse[]> => {
  const response = await apiAxios.get(`/v1/currencies`, {
    withCredentials: true,
  });

  return response.data;
};
