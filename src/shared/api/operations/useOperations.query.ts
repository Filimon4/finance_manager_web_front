import { useQuery } from "@tanstack/react-query";
import type { IOperationsRequest } from "./operations.interface";
import { operations } from ".";

export const useOperations = (params: IOperationsRequest) => {
  return useQuery({
    queryKey: ["operations", params],
    queryFn: async () => {
      return await operations(params);
    },
  });
};
