import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useSendMobilePhoneNumber = () => {
  return useMutation({
    mutationFn: (input: string) => OtpFormService.SendMobilePhoneNumber(input),
    mutationKey: ["POST_MOBILE_PHONE"],
  });
};

export default useSendMobilePhoneNumber;
