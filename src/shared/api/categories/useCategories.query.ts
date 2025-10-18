import { useQuery } from "@tanstack/react-query";
import { categories, type ICetegoriesRequest } from ".";

export const useCategories = (params: ICetegoriesRequest) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: async () => {
      return await categories(params);
    },
  });
};
