import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useValidateRepresentationCode = () => {
  return useMutation({
    mutationFn: () => OtpFormService.ValidateOtp(),
    mutationKey: ["POST_MOBILE_PHONE"],
  });
};

export default useValidateRepresentationCode;
