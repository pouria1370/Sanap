import Axios from "../Axios_Infrastructure";

class OtpFormServices {
  async SendMobilePhoneNumber() {
    Axios.post("DEY/agent/verification/signup/create_otp/", {
      phone_number: "09000000000",
    });
  }
}

const OtpFormService = new OtpFormServices();
export default OtpFormService;
