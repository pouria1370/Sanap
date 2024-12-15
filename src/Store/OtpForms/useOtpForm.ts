import { TOtpStore } from "@customTypes/Components/Molecules/OtpForms/OtpForms";
import { create } from "zustand";

export const useOtpForm = create<TOtpStore>()((set) => ({
  otpForm: "MobilePhoneForm",
  setOtpForm: (input) => set({ otpForm: input }),
  mobile: "09000000000",
  setMobile: (input) => set({ mobile: input }),
  fullName: { family: "", name: "" },
  setFullName: (input) => set((state) => ({ ...state, fullName: input })),
  isGettingCityEnabled: false,
  setIsGettingCityEnabled: (input) => set({ isGettingCityEnabled: input }),
}));
