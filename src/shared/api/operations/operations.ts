import apiAxios from "@/lib/axios";
import type {
  ICreateOperationRequest,
  IOperationsRequest,
  IOperationsResponse,
  IUpdateOperationRequest,
} from "../operations";

export const operations = async (
  params: IOperationsRequest
): Promise<IOperationsResponse[]> => {
  const response = await apiAxios.get(`/v1/operations`, {
    withCredentials: true,
    params,
  });

  return response.data;
};

export const createOperation = async (
  data: ICreateOperationRequest
): Promise<{ id: number }> => {
  const response = await apiAxios.post(`/v1/operations`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const updateOperation = async (
  data: IUpdateOperationRequest
): Promise<{ id: number }> => {
  const response = await apiAxios.patch(`/v1/operations`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const opertaion = async (id: number): Promise<IOperationsResponse> => {
  const response = await apiAxios.get(`/v1/operations/${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteOperation = async (
  id: number
): Promise<{ result: boolean }> => {
  const response = await apiAxios.delete(`/v1/operations/${id}`, {
    withCredentials: true,
  });

  return response.data;
};
