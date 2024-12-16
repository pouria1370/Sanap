/**
 *@description This Type is used just for Store
 */
export type TOtpStore = {
  otpForm: TOtpFormChildrenType;
  setOtpForm: (input: TOtpFormChildrenType) => void;
  mobile: string;
  setMobile: (input: string) => void;
  fullName: { name: string; family: string };
  setFullName: (input: { name: string; family: string }) => void;
  isGettingCityEnabled: boolean;
  setIsGettingCityEnabled: (input) => void;
};

/**
 *@description This Type is used just for MobilePhoneForm
 */
export type TMobilePhoneFormType = {
  mobile: string;
};
/**
 *@description This Type is used just for ConfirmationCodeForm
 */
export type TConfirmationCodeFormType = {
  digits: string[];
};
/**
 *@description This Type is used just for IdentityForm
 */
export type TIdentityFormType = {
  representationCode: string;
  state: string | null;
  city: string | null;
  address: string;
  branch: string;
  phone: string;
  representationType: "real" | "legal";
  representationName?: string | null;
};
/**
 *@description This Type is used just for  NameAndFamilyForm
 */
export type TNameAndFamilyFormType = {
  name: string;
  family: string;
};
/**
 *@description This Type is used just for  OtpformChildren
 */
export type TOtpFormChildrenType =
  | "ConfirmationCodeForm"
  | "IdentityForm"
  | "MobilePhoneForm"
  | "NameAndFamilyForm";
/**
 *@description This Type is used just for  setIdentityForm
 */
export type TIdentityType = {
  agent_code: string;
  city_code: string;
  county: string;
  first_name: string;
  insurance_branch: string;
  last_name: string;
  phone: string;
  phone_number: string;
  province: string;
  name?: string; // if the real is set
  address: string;
  agency_type: "real" | "legal";
};

/**
 *@description This Type is used just for OtpResendCode
 */
export type TOtpResendCodeType = {
  timer: number;
};
