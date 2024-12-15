import { useQuery } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useGetStates = () => {
  return useQuery({
    queryFn: () => OtpFormService.GetStates(),
    queryKey: ["GET_STATES"],
  });
};

export default useGetStates;
