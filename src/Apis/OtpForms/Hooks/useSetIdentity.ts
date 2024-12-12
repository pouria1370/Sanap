import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import { TIdentityType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";

const useSetIdentity = () => {
  return useMutation({
    mutationFn: (item: TIdentityType) => OtpFormService.SetIdentity(item),
    mutationKey: ["POST_IDENTITY_USER"],
  });
};

export default useSetIdentity;
