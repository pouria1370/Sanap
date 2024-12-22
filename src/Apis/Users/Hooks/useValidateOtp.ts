import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import { TResponceGeneralType } from "@customTypes/Apis/OtpForms/OtpForms";

type Test = { input: string; mobile: string };
const useValidateOtp = () => {
  return useMutation<
    TResponceGeneralType<string>,
    TResponceGeneralType<string | null>,
    Test
  >({
    mutationFn: (input: Test) =>
      OtpFormService.ValidateOtp({ input: input.input, mobile: input.mobile }),
    mutationKey: ["POST_VALIDATE_OTP"],
  });
};

export default useValidateOtp;
