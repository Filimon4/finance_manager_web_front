import { useMutation, useQueryClient } from "@tanstack/react-query";
import { restoreAccount } from ".";

export const useRestoreAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => restoreAccount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bankAccount"] });
    },
  });
};
