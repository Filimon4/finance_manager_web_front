import apiAxios from "@/lib/axios";
import type { SignInRequest, SignInResponse } from "./signin.interface";

export const signIn = async (
  credentials: SignInRequest
): Promise<SignInResponse> => {
  const response = await apiAxios.post(
    `/v1/auth/signin`,
    JSON.stringify(credentials),
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );

  return response.data;
};
