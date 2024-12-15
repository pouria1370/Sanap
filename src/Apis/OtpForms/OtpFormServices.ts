import { TIdentityType } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import Axios from "../Axios_Infrastructure";
import { TResponceType } from "@customTypes/Apis/Auth/Auth";
import {
  TFetchedToken,
  TOtpIdentityFormBranchType,
  TOtpIdentityFormCityType,
  TOtpIdentityFormProvinceType,
  TResponceGeneralType,
  TUserStatus,
} from "@customTypes/Apis/OtpForms/OtpForms";

class OtpFormServices {
  async SendMobilePhoneNumber(input: string) {
    return Axios.post<TResponceType>(
      "/api/v2/app/DEY/agent/verification/signup/create_otp/",
      {
        phone_number: input,
      }
    );
  }
  async ValidateOtp({ input, mobile }: { input: string; mobile: string }) {
    return Axios.post<TResponceType>(
      "/api/v2/app/DEY/agent/verification/signup/validate_otp/",
      {
        code: input,
        phone_number: mobile,
      }
    );
  }
  async ValidateRepresentationCode(input: string) {
    return Axios.post<TResponceType>(
      "/api/v2/app/DEY/agent/verification/signup/check_agency_code/",
      {
        agent_code: input,
      }
    );
  }
  async GetStates() {
    return Axios.get<TOtpIdentityFormProvinceType[]>("/base/provinces_wop/");
  }
  async GetCities(id: string) {
    return Axios.get<TOtpIdentityFormCityType[]>("/base/counties_wop/", {
      params: { province: id },
    });
  }
  async GetInsurances({ name, province }: { name: string; province: string }) {
    return Axios.get<TOtpIdentityFormBranchType>(
      "/api/v2/app/selection_item/insurance_branch/wop_list/",
      { params: { insurance: "DEY", name, province } }
    );
  }
  async GetStatus() {
    return Axios.get<TResponceGeneralType<TUserStatus>>(
      "/api/v2/app/DEY/agent/app_user_status/"
    );
  }
  async SetIdentity(payLoad: TIdentityType) {
    return Axios.post<TResponceGeneralType<TFetchedToken>>(
      "/api/v2/app/DEY/agent/verification/signup",
      payLoad
    );
  }
}

const OtpFormService = new OtpFormServices();
export default OtpFormService;
