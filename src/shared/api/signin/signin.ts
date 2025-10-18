import apiAxios from "@/lib/axios";
import type { ISignInRequest, ISignInResponse } from "./signin.interface";

export const signIn = async (
  credentials: ISignInRequest
): Promise<ISignInResponse> => {
  const response = await apiAxios.post(
    `/v1/auth/signin`,
    JSON.stringify(credentials),
    {
      withCredentials: true,
    }
  );

  return response.data;
};
