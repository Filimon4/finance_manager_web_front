import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signIn, type ISignInRequest } from ".";

export const useSignIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: ISignInRequest) => signIn(credentials),
    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Sign in error:", error.message);
    },
  });
};
