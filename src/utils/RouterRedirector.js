import { browserHistory } from 'react-router';
import Enums from "./Enums";
import { getUserToken } from './LocalStorageManager';


export const redirectToWelcomePage = () => browserHistory.push(`/${Enums.WELCOME_PAGE_PATH}`);;

export const verifyAuthetication = (nextState, replace) => {
  if (getUserToken() === null) {
    replace('/login');
  }
}