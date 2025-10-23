import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAccount } from ".";

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteAccount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bankAccount"] });
    },
  });
};
