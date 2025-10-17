import { useQuery } from "@tanstack/react-query";
import { categories, type CetegoriesRequest } from ".";

export const useCategories = (params: CetegoriesRequest) => {
  return useQuery({
    queryKey: ["balance", params],
    queryFn: async ({ queryKey }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_key, data] = queryKey as [string, CetegoriesRequest];
      return await categories(data);
    },
  });
};
