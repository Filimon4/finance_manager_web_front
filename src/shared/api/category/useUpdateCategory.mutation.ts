import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory, type ICategoryUpdateRequest } from ".";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ICategoryUpdateRequest) => updateCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
};
