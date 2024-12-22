import { useMutation } from "@tanstack/react-query";
import authServices from "../AuthServices";

const useLogout = () => {
  return useMutation({
    mutationFn: () => authServices.Logout(),
    mutationKey: ["Logout"],
  });
};

export default useLogout;
