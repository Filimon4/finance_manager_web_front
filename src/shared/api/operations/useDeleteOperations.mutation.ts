import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOperation } from ".";

export const useDeleteOperation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteOperation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["operations"] });
    },
  });
};
