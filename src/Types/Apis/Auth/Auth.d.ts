import { AxiosResponse } from "axios";

/**
 *@description This Type is used just for Auth
 */
export type TAuthType = {
  token: string | null;
  setToken: (input: string | null) => void;
  removeToken: () => void;
  registerId: number | null;
  setRegisterId: (input: number | null) => void;
  removeRegisterId: () => void;
  currentForm: "login" | "register";
  setCurrentForm: (input: "login" | "register") => void;
};
/**
 *@description This Type is used just for Novin-Responce
 */
export type TResponseType<T> = AxiosResponse<T>;

export type TRegisterResponseType = {
  id: number;
  token: string;
};
export type TRegisterErrorResponseType = {
  error: string;
};
export type TLoginResponseType = {
  token: string;
};
export type TLoginErrorResponseType = {
  error: string;
};
export type TRegisterInputType = { email: string; password: string };
export type TLoginInputType = { email: string; password: string };
