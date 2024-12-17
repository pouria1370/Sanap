import { TAuthType } from "@customTypes/Apis/Auth/Auth";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useAuth = create<TAuthType>()(
  persist(
    (set) => ({
      token: null,
      setToken: (input) => set({ token: input }),
      removeToken: () => set({ token: null }),
      registerId: null,
      setRegisterId: (input) => set({ registerId: input }),
      removeRegisterId: () => set({ registerId: null }),
      currentForm: "login",
      setCurrentForm: (input) => set({ currentForm: input }),
    }),
    {
      name: "Auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
