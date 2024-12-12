/**
 *@description This Type is used just for Auth
 */
export type TAuthType = {
  token: string | null;
  setToken: (input: string | null) => void;
  removeToken: () => void;
};
