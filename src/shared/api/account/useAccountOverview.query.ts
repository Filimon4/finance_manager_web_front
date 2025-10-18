import { useQuery } from "@tanstack/react-query";
import { accountOverview } from "./account";

export const useAccountOverview = (id: number) => {
  return useQuery({
    queryKey: ["bankAccountOverview", id],
    queryFn: async () => {
      return await accountOverview(id);
    },
  });
};
