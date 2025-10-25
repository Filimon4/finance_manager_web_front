import { useMutation, useQueryClient } from "@tanstack/react-query";
import { restoreCategory } from ".";

export const useReleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => restoreCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
