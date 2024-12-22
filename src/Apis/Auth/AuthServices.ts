import {
  TLoginResponseType,
  TRegisterResponseType,
} from "@customTypes/Apis/Auth/Auth";
import Axios from "../Axios_Infrastructure";

class AuthServices {
  async Register({ email, password }: { email: string; password: string }) {
    const responce = await Axios.post<TRegisterResponseType>("/register", {
      email,
      password,
    });
    if (!responce.data) {
      throw responce.data;
    }
    return responce.data;
  }
  async Logout() {
    const response = await Axios.post<null>("/logout");
    return response.data;
  }
  async Login({ email, password }: { email: string; password: string }) {
    const response = await Axios.post<TLoginResponseType>("/login", {
      email,
      password,
    });
    if (!response.data.token) {
      throw response.data;
    }
    return response.data;
  }
}

const authServices = new AuthServices();
export default authServices;
