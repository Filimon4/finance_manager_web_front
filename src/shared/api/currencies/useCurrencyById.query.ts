import { useQuery } from "@tanstack/react-query";
import { currencyById } from ".";

export const useCurrencyById = () => {
  return useQuery({
    queryKey: ["currency"], // base key
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey as [string, number];
      return await currencyById(id);
    },
    enabled: false, // don't fetch automatically
  });
};
