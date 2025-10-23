import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAccount, type IAccountUpdateRequest } from ".";

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IAccountUpdateRequest) => updateAccount(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bankAccount"] });
    },
  });
};
