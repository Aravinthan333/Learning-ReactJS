import { getUserData, removeUserData } from "./Storage";

export const isAuthenticated = () => {
  // return Boolean(getUserData() || 0)
  return getUserData() != null ? true : false;
};

export const logout = () => {
  removeUserData();
};
