import { redirect } from "react-router";

export async function protectedLoader() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw redirect("/auth/signin");
  }

  // const  = await apiAxios.post(`/v1/auth/verify`, {
  //   withCredentials: true,
  // });

  // if (!verify.ok) throw redirect("/login");

  return null;
}
