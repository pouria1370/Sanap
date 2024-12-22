import { useMutation } from "@tanstack/react-query";
import authServices from "../AuthServices";
import {
  TLoginErrorResponseType,
  TLoginInputType,
  TLoginResponseType,
} from "@customTypes/Apis/Auth/Auth";

const useLogin = () => {
  return useMutation<
    TLoginResponseType,
    TLoginErrorResponseType,
    TLoginInputType
  >({
    mutationFn: ({ email, password }: TLoginInputType) =>
      authServices.Login({ email, password }),
    mutationKey: ["Login"],
  });
};

export default useLogin;
