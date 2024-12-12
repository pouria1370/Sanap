import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useGetStates = () => {
  return useMutation({
    mutationFn: () => OtpFormService.GetStates(),
    mutationKey: ["GET_STATES"],
  });
};

export default useGetStates;
