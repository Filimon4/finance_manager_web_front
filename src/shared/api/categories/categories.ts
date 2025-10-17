import apiAxios from "@/lib/axios";
import type {
  CategoryBalanceResponse,
  CategoryResponse,
  CetegoriesRequest,
} from "./categories.interface";

export const categories = async (
  params: CetegoriesRequest
): Promise<CategoryResponse[]> => {
  const response = await apiAxios.get(`/v1/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    params,
  });

  return response.data;
};

export const categoryOverview = async (
  id: number
): Promise<CategoryBalanceResponse> => {
  const response = await apiAxios.get(`/v1/categories/${id}/overview`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return response.data;
};
