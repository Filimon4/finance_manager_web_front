import { useQuery } from "@tanstack/react-query";
import { currencies } from ".";

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: async () => {
      return await currencies();
    },
  });
};
