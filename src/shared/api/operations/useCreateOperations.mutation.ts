import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOperation, type ICreateOperationRequest } from ".";

export const useCreateOperation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ICreateOperationRequest) => createOperation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["operations"] });
    },
  });
};
