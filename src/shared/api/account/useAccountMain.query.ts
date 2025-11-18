import { useQuery } from "@tanstack/react-query";
import { accountMain } from "./account";

export const useAccountMain = () => {
  return useQuery({
    queryKey: ["bankAccountMain"],
    queryFn: async () => {
      return await accountMain();
    },
  });
};
