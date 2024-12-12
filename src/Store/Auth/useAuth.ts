import { TAuthType } from "@customTypes/Apis/Auth/Auth";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useAuth = create<TAuthType>()(
  persist(
    (set) => ({
      token: null,
      setToken: (input) => set({ token: input }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: "Auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
