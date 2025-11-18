import apiAxios from "@/lib/axios";
import type { ICurrenciesResponse } from ".";

export const currencies = async (): Promise<ICurrenciesResponse[]> => {
  const response = await apiAxios.get(`/v1/currencies`, {
    withCredentials: true,
  });

  return response.data;
};

export const currencyById = async (
  id: number
): Promise<ICurrenciesResponse> => {
  const response = await apiAxios.get(`/v1/currencies/${id}`, {
    withCredentials: true,
  });

  return response.data;
};
