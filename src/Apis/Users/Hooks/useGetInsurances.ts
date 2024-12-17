import { useQuery } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import { useOtpForm } from "@store/OtpForms/useOtpForm";

const useGetInsurances = (province: string, name: string) => {
  const CTX = useOtpForm();
  return useQuery({
    queryFn: ({ queryKey }) => {
      const [, province, name] = queryKey; // Extract the second value in the queryKey array
      return OtpFormService.GetInsurances({ province, name });
    },
    queryKey: ["GWT_INSURANCE", province, name],
    enabled: CTX.isGettingCityEnabled,
  });
};

export default useGetInsurances;
