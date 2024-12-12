import Axios from "../Axios_Infrastructure";

class OtpFormServices {
  async SendMobilePhoneNumber() {
    Axios.post("/api/v2/app/DEY/agent/verification/signup/create_otp/", {
      phone_number: "09000000000",
    });
  }
  async ValidateOtp() {
    Axios.post("/api/v2/app/DEY/agent/verification/signup/validate_otp/", {
      code: 55555,
      phone_number: "09000000000",
    });
  }
  async ValidateRepresentationCode() {
    Axios.post("/api/v2/app/DEY/agent/verification/signup/check_agency_code/", {
      agent_code: "123",
    });
  }
  async GetStates() {
    Axios.get("/base/provinces_wop/");
  }
  async GetCities() {
    Axios.get("/base/counties_wop/");
  }
  async getInsurances() {
    Axios.get("/api/v2/app/selection_item/insurance_branch/wop_list/");
  }
}

const OtpFormService = new OtpFormServices();
export default OtpFormService;
