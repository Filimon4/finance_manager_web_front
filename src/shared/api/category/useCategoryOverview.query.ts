import { useQuery } from "@tanstack/react-query";
import { categoryOverview } from "./category";
import type { IBalanceResponse } from "../balance";

export const useCategoryOverview = (id: number) => {
  return useQuery<IBalanceResponse>({
    queryKey: ["categoryOverview", id],
    queryFn: async () => await categoryOverview(id),
    enabled: !!id,
  });
};
