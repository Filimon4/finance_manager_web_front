import { useQuery } from "@tanstack/react-query";
import { opertaion } from ".";

export const useOperation = (id: number) => {
  return useQuery({
    queryKey: ["operations", id],
    queryFn: async () => {
      return await opertaion(id);
    },
  });
};
