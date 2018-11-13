import Enums from "./Enums";

export const getUserToken = () => localStorage.getItem(Enums.APP_USER_TOKEN);

export const setUserToken = (userToken) =>
  localStorage.setItem(Enums.APP_USER_TOKEN, JSON.stringify(userToken));

export const removeUserToken = () => {
  if (typeof localStorage[Enums.APP_USER_TOKEN] !== 'undefined') {
    localStorage.removeItem(Enums.APP_USER_TOKEN);
  }
}

