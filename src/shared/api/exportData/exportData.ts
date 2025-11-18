import apiAxios from "@/lib/axios";

export const exportData = async () => {
  const response = await apiAxios.get(`/v1/exportData/halfYear`, {
    responseType: "blob", // ⬅ обязательно!
    withCredentials: true,
  });

  const blob = new Blob([response.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "half-year-report.xlsx";
  a.click();

  window.URL.revokeObjectURL(url);
};
