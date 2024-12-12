import { useMutation } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useGetCities = () => {
  return useMutation({
    mutationFn: () => OtpFormService.GetCities(),
    mutationKey: ["GET_CITIES"],
  });
};

export default useGetCities;
