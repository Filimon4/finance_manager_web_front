import apiAxios from "@/lib/axios";
import type {
  ICategoryCreateRequest as ICategoryCreateResponse,
  ICategoryBalanceResponse,
  ICategoryResponse,
  ICategoryUpdateRequest,
  ICetegoriesRequest,
} from "./category.interface";

export const categories = async (
  params: ICetegoriesRequest
): Promise<ICategoryResponse[]> => {
  const response = await apiAxios.get(`/v1/categories`, {
    withCredentials: true,
    params,
  });

  return response.data;
};

export const category = async (id: number): Promise<ICategoryResponse> => {
  const response = await apiAxios.get(`/v1/categories/${id}`, {
    withCredentials: true,
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

export const createCategory = async (
  data: ICategoryCreateResponse
): Promise<{ id: number }> => {
  const response = await apiAxios.post(`/v1/categories/`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const updateCategory = async (
  data: ICategoryUpdateRequest
): Promise<{ id: number }> => {
  const response = await apiAxios.patch(`/v1/categories/`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteCategory = async (
  id: number
): Promise<{ result: boolean }> => {
  const response = await apiAxios.delete(`/v1/categories/${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const restoreCategory = async (
  id: number
): Promise<{ result: boolean }> => {
  const response = await apiAxios.patch(`/v1/categories/${id}/restore`, {
    withCredentials: true,
  });

  return response.data;
};
