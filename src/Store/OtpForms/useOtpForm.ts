import { TOtpStore } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { create } from "zustand";

export const useOtpForm = create<TOtpStore>()((set) => ({
  otpForm: "MobilePhoneForm",
  setOtpForm: (input) => set({ otpForm: input }),
}));
