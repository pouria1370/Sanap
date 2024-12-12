import { create } from "zustand";
import { TOtpStore } from "../../Types/Components/Molecules/OtpForms/OtpForms";

export const useOtpForm = create<TOtpStore>((set) => ({
  otp: "",
  setOtp: () => {},
}));
