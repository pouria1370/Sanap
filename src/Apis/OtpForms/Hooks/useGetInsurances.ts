import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useGetInsurances = () => {
  return useMutation({
    mutationFn: () => OtpFormService.getInsurances(),
    mutationKey: ["GWT_INSURANCE"],
  });
};

export default useGetInsurances;
