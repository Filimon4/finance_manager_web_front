import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { opertaion, type IOperationsResponse } from ".";

export const useOperation = (
  id: number,
  options?: Omit<UseQueryOptions<IOperationsResponse>, "queryKey" | "queryFn">
): UseQueryResult<IOperationsResponse> => {
  return useQuery({
    ...options,
    queryKey: ["operations", id],
    queryFn: async (): Promise<IOperationsResponse> => {
      return await opertaion(id);
    },
  });
};
