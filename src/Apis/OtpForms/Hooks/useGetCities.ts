import { useQuery } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";
import { useOtpForm } from "@store/OtpForms/useOtpForm";

const useGetCities = (key: string) => {
  const CTX = useOtpForm();
  return useQuery({
    queryFn: ({ queryKey }) => {
      const [, provinceId] = queryKey; // Extract the second value in the queryKey array
      return OtpFormService.GetCities(provinceId);
    },
    queryKey: ["GET_CITIES", key],
    enabled: CTX.isGettingCityEnabled,
  });
};

export default useGetCities;
