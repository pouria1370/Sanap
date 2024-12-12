/**
 *@description This Type is used just for Store
 */
export type TOtpStore = {
  otp: string;
  setOtp: (input: string) => void;
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
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};
/**
 *@description This Type is used just for IdentityForm
 */
export type TIdentityFormType = {
  representationCode: string;
  state: string;
  city: string;
  address: string;
  branch: string;
  phone: string;
  representationType: "Real" | "State";
  representationName?: string;
};
/**
 *@description This Type is used just for  NameAndFamilyForm
 */
export type TNameAndFamilyFormType = {
  name: string;
  family: string;
};
