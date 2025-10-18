import { useQuery } from "@tanstack/react-query";
import { accounts } from "./account";
import type { IAccountRequest } from "./account.interface";

export const useAccounts = (params: IAccountRequest) => {
  return useQuery({
    queryKey: ["bankAccount", params],
    queryFn: async () => {
      return await accounts(params);
    },
  });
};
