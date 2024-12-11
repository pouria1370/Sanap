import { create } from "zustand";
import { TOtpStore } from "../../Types/OtpForm/OtpForm";

export const useOtpForm = create<TOtpStore>((set) => ({
  otp: "",
  setOtp: () => {},
}));
