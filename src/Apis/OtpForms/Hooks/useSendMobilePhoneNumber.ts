import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import {
  TResponceGeneralErrorType,
  TResponceGeneralType,
} from "@customTypes/Apis/OtpForms/OtpForms";

const useSendMobilePhoneNumber = () => {
  return useMutation<
    TResponceGeneralType<null>,
    TResponceGeneralType<null>,
    string
  >({
    mutationFn: (input: string) => OtpFormService.SendMobilePhoneNumber(input),
    mutationKey: ["POST_MOBILE_PHONE"],
  });
};

export default useSendMobilePhoneNumber;
