import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signUp, type SignUpRequest } from ".";

export const useSignUp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: SignUpRequest) => signUp(userData),
    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Sign up error:", error.message);
    },
  });
};
