import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useValidateOtp = () => {
  return useMutation({
    mutationFn: (input: { input: string; mobile: string }) =>
      OtpFormService.ValidateOtp({ input: input.input, mobile: input.mobile }),
    mutationKey: ["POST_VALIDATE_OTP"],
  });
};

export default useValidateOtp;
