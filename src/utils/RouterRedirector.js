import { browserHistory } from 'react-router';
import Enums from "./Enums";

export const redirectToWelcomePage = () => browserHistory.push(`/${Enums.WELCOME_PAGE_PATH}`);;

