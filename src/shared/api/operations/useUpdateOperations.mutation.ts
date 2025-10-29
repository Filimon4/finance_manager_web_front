import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOperation, type IUpdateOperationRequest } from ".";

export const useUpdateOperation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IUpdateOperationRequest) => updateOperation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["operations"] });
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });
};
