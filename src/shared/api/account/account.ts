import apiAxios from "@/lib/axios";
import type {
  IAccountOverviewResponse,
  IAccountRequest,
  IAccountResponse,
} from "./account.interface";

export const accounts = async (
  params: IAccountRequest
): Promise<IAccountResponse[]> => {
  const response = await apiAxios.get(`/v1/bankAccount`, {
    withCredentials: true,
    params,
  });

  return response.data;
};

export const accountOverview = async (
  id: number
): Promise<IAccountOverviewResponse> => {
  const response = await apiAxios.get(`/v1/bankAccount/${id}/overview`, {
    withCredentials: true,
  });

  return response.data;
};
