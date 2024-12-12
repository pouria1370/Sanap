import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useSendMobilePhoneNumber = () => {
  return useMutation({
    mutationFn: () => OtpFormService.SendMobilePhoneNumber(),
    mutationKey: ["POST_MOBILE_PHONE"],
  });
};

export default useSendMobilePhoneNumber;
