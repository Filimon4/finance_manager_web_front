import apiAxios from "@/lib/axios";
import type { IAnalyticsResponse } from ".";

export const dynamic = async (month: number): Promise<IAnalyticsResponse> => {
  const response = await apiAxios.get(`/v1/analytics`, {
    withCredentials: true,
    params: {
      month,
    },
  });

  return response.data;
};
