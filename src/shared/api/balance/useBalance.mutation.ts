import { useQuery } from "@tanstack/react-query";
import { balance } from "./balance";

export const useBalance = () => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      return await balance();
    },
  });
};
