import { TIdentityType } from "@customTypes/Components/Molecules/AuthForms/AuthForms";
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
    const responce = await Axios.post<TResponceGeneralType<null>>(
      "/api/v2/app/DEY/agent/verification/signup/create_otp/",
      {
        phone_number: input,
      }
    );
    if (!responce.data.is_success) {
      throw responce.data;
    }
    return responce.data;
  }
  async ValidateOtp({ input, mobile }: { input: string; mobile: string }) {
    const response = await Axios.post<TResponceGeneralType<string>>(
      "/api/v2/app/DEY/agent/verification/signup/validate_otp/",
      {
        code: input,
        phone_number: mobile,
      }
    );
    if (!response.data.is_success) {
      throw response.data;
    }
    return response.data;
  }
  async ValidateRepresentationCode(input: string) {
    const response = await Axios.post<TResponceGeneralType<string>>(
      "/api/v2/app/DEY/agent/verification/signup/check_agency_code/",
      {
        agent_code: input,
      }
    );
    if (!response.data.is_success) {
      throw response.data;
    }
    return response.data;
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
    const response = await Axios.post<TResponceGeneralType<TFetchedToken>>(
      "/api/v2/app/DEY/agent/verification/signup/",
      payLoad
    );
    if (!response.data.is_success) {
      throw response.data;
    }
    return response.data;
  }
}

const OtpFormService = new OtpFormServices();
export default OtpFormService;
