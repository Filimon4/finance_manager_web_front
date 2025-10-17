import { useQuery } from "@tanstack/react-query";
import { categoryOverview } from "./categories";
import type { BalanceResponse } from "../balance";

export const useCategoryOverview = (id: number) => {
  return useQuery<BalanceResponse>({
    queryKey: ["categoryOverview", id],
    queryFn: async () => await categoryOverview(id),
    enabled: !!id,
  });
};
