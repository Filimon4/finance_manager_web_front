import apiAxios from "@/lib/axios";
import type { SignUpRequest, SignUpResponse } from "./signup.interface";

export const signUp = async (
  credentials: SignUpRequest
): Promise<SignUpResponse> => {
  const response = await apiAxios.post(
    `/v1/auth/signup`,
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
