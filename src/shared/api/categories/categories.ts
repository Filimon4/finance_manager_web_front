import apiAxios from "@/lib/axios";
import type {
  BalanceResponse,
  CetegoriesRequest,
} from "./categories.interface";

export const categories = async (
  params: CetegoriesRequest
): Promise<BalanceResponse[]> => {
  const response = await apiAxios.get(`/v1/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    params,
  });

  return response.data;
};
