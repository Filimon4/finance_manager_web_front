import { useQuery } from "@tanstack/react-query";
import { category } from ".";

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      return await category(id);
    },
  });
};
