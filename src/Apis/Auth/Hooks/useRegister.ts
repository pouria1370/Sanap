import { useMutation } from "@tanstack/react-query";
import authServices from "../AuthServices";
import {
  TRegisterResponseType,
  TRegisterErrorResponseType,
  TRegisterInputType,
} from "@customTypes/Apis/Auth/Auth";

const useRegister = () => {
  return useMutation<
    TRegisterResponseType,
    TRegisterErrorResponseType,
    TRegisterInputType
  >({
    mutationFn: ({ email, password }: TRegisterInputType) =>
      authServices.Register({ email, password }),
    mutationKey: ["Register"],
  });
};

export default useRegister;
