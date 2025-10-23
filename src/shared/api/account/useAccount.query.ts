import { useQuery } from "@tanstack/react-query";
import { account } from "./account";

export const useAccount = (id: number) => {
  return useQuery({
    queryKey: ["bankAccount", id],
    queryFn: async () => {
      return await account(id);
    },
  });
};
