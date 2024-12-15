import { useQuery } from "@tanstack/react-query";
import OtpFormService from "../OtpFormServices";

const useGetUserStatus = () => {
  return useQuery({
    queryFn: () => OtpFormService.GetStatus(),

    queryKey: ["USER_STATUS"],
  });
};

export default useGetUserStatus;
