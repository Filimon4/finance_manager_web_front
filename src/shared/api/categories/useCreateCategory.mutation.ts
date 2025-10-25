import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, type ICategoryCreateRequest } from ".";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ICategoryCreateRequest) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
};
