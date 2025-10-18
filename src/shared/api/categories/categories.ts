import apiAxios from "@/lib/axios";
import type {
  ICategoryBalanceResponse,
  ICategoryResponse,
  ICetegoriesRequest,
} from "./categories.interface";

export const categories = async (
  params: ICetegoriesRequest
): Promise<ICategoryResponse[]> => {
  const response = await apiAxios.get(`/v1/categories`, {
    withCredentials: true,
    params,
  });

  return response.data;
};

export const categoryOverview = async (
  id: number
): Promise<ICategoryBalanceResponse> => {
  const response = await apiAxios.get(`/v1/categories/${id}/overview`, {
    withCredentials: true,
  });

  return response.data;
};
