import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import { TResponceGeneralType } from "@customTypes/Apis/OtpForms/OtpForms";

const useValidateRepresentationCode = () => {
  return useMutation<
    TResponceGeneralType<string>,
    TResponceGeneralType<string>,
    string
  >({
    mutationFn: (input: string) =>
      OtpFormService.ValidateRepresentationCode(input),
    mutationKey: ["POST_MOBILE_PHONE"],
  });
};

export default useValidateRepresentationCode;
