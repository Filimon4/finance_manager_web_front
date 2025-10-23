import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAccount, type IAccountCreateRequest } from ".";

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IAccountCreateRequest) => createAccount(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bankAccount"] });
    },
  });
};
