import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useValidateOtp = () => {
  return useMutation({
    mutationFn: () => OtpFormService.ValidateOtp(),
    mutationKey: ["POST_VALIDATE_OTP"],
  });
};

export default useValidateOtp;
