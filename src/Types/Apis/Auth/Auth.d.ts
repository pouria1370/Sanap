import { AxiosResponse } from "axios";

/**
 *@description This Type is used just for Auth
 */
export type TAuthType = {
  token: string | null;
  setToken: (input: string | null) => void;
  removeToken: () => void;
  refreshToken: string | null;
  setRefreshToken: (input: string | null) => void;
  removeRefreshToken: () => void;
};
/**
 *@description This Type is used just for SANAP-Responce
 */
export type TResponceType<T> = AxiosResponse<T>;
