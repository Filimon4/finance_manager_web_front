import { useMutation } from "@tanstack/react-query";
import { exportData } from ".";

export const useExportData = () => {
  return useMutation({
    mutationFn: () => exportData(),
  });
};
