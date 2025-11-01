import { useQuery } from "@tanstack/react-query";
import { dynamic } from "./dynamic";

export const useDynamic = (month: number) => {
  return useQuery({
    queryKey: ["dynamic", month],
    queryFn: async () => {
      return await dynamic(month);
    },
  });
};
