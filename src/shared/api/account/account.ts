import apiAxios from "@/lib/axios";
import type {
  IAccountCreateRequest,
  IAccountCreateResponse,
  IAccountOverviewResponse,
  IAccountRequest,
  IAccountResponse,
  IAccountUpdateRequest,
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

export const account = async (id: number): Promise<IAccountResponse> => {
  const response = await apiAxios.get(`/v1/bankAccount/${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const createAccount = async (
  data: IAccountCreateRequest
): Promise<IAccountCreateResponse> => {
  const response = await apiAxios.post(`/v1/bankAccount/`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const updateAccount = async (
  data: IAccountUpdateRequest
): Promise<{ id: number }> => {
  const response = await apiAxios.patch(`/v1/bankAccount/`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteAccount = async (
  id: number
): Promise<{ result: boolean }> => {
  const response = await apiAxios.delete(`/v1/bankAccount/${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const restoreAccount = async (
  id: number
): Promise<{ result: boolean }> => {
  const response = await apiAxios.patch(`/v1/bankAccount/${id}/restore`, {
    withCredentials: true,
  });

  return response.data;
};
