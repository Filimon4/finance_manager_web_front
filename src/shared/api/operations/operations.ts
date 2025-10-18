import apiAxios from "@/lib/axios";
import type { IOperationsRequest, IOperationsResponse } from "../operations";

export const operations = async (
  params: IOperationsRequest
): Promise<IOperationsResponse[]> => {
  const response = await apiAxios.get(`/v1/operations`, {
    withCredentials: true,
    params,
  });

  return response.data;
};
