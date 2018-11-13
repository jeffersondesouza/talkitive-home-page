import AuthActions from './actions'
import axios from 'axios';

import { setUserToken } from '../../../utils/LocalStorageManager';
import { redirectToWelcomePage } from '../../../utils/RouterRedirector';

export default class AuthMiddleware {
  static loginRequest({ email, password }) {
    return dispatch => {

      dispatch(AuthActions.loginRequest({ email, password }));

      axios.post('https://api.dev.talkative.media/v1/login/email-and-password', { email, password })
        .then(res => res.data)
        .then(user => {
          setUserToken(user.token);
          redirectToWelcomePage();
          
          dispatch(AuthActions.loginSuccess(user))
          return user;
        })
        .catch(error => {
          dispatch(AuthActions.loginFailure(error))
        });
    }
  }

}
