import { string } from "zod";

/**
 *@description This Type is used just for OtpIdentityFormProvinces
 */
export type TOtpIdentityFormProvinceType = {
  id: number;
  is_active: boolean;
  name: string;
  code: string;
  name_split: string;
  creator_user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
  country: number;
};
/**
 *@description This Type is used just for OtpIdentityFormCities
 */
export type TOtpIdentityFormCityType = {
  id: number;
  is_active: boolean;
  name: string;
  fanavaran_code: string;
  name_split: string;
  province: TProviceType;
  creator_user: TCreatorUserType;
};

export type TProviceType = {
  id: number;
  is_active: booelan;
  name: string;
  code: string;
  name_split: string;
  creator_user: number;
  country: number;
};
export type TCreatorUserType = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
};

/**
 *@description This Type is used just for OtpIdentityFormBranches
 */
export type TOtpIdentityFormBranchType = TResponceGeneralType<TInsuranceType[]>;

/**
 *@description This Type is used just for SANAP-Responce-Error
 */
export type TResponceGeneralErrorType = {
  type: string;
  code: string;
  detail: string;
  attr: string;
  fa_details: string;
};
/**
 *@description This Type is used just for SANAP-Responce-Error
 */
export type TResponceGeneralType<T> = {
  error_details: null | TResponceGeneralErrorType[];
  is_success: boolean;
  message: string;
  response: T;
  status_code: number;
};
export type TInsuranceType = {
  id: number;
  name: string;
  insurance: number;
  province: number;
  county: number;
};
/**
 *@description This Type is used just for fetchedToken after signUp
 */
export type TFetchedToken = {
  access: string;
  refresh: string;
};
/**
 *@description This Type is used just for Status after signUp
 */
export type TUserStatus = {
  registration_status: string;
};
