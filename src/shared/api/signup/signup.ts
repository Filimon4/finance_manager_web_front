import apiAxios from "@/lib/axios";
import type { ISignUpRequest, ISignUpResponse } from "./signup.interface";

export const signUp = async (
  credentials: ISignUpRequest
): Promise<ISignUpResponse> => {
  const response = await apiAxios.post(
    `/v1/auth/signup`,
    JSON.stringify(credentials),
    {
      withCredentials: true,
    }
  );

  return response.data;
};
