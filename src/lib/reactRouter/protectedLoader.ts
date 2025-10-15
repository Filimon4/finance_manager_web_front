import { redirect } from "react-router";

export async function protectedLoader() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw redirect("/auth/signin");
  }

  // Можно добавить проверку подписи токена или запрос к API:
  // const response = await fetch("/api/verify", { headers: { Authorization: `Bearer ${token}` } });
  // if (!response.ok) throw redirect("/login");

  return null;
}
