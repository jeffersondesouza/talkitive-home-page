import AuthActions from './actions'

import authAPI from '../../api/auth-api'
import { setUserToken } from '../../../utils/LocalStorageManager';
import { redirectToWelcomePage } from '../../../utils/RouterRedirector';
import ServerErrorCatcher from '../../../utils/ServerErrorCatcher';


export default class AuthMiddleware {
  static loginRequest({ email, password }) {
    return dispatch => {
      dispatch(AuthActions.loginRequest({ email, password }));
      authAPI.login({ email, password })
        .then(res => res.data)
        .then(user => {
          setUserToken(user.token);
          redirectToWelcomePage();

          dispatch(AuthActions.loginSuccess(user))
          return user;
        })
        .catch(error => {
          if (ServerErrorCatcher.hasResponseError(error)) {
            dispatch(AuthActions.loginFailure(ServerErrorCatcher.getFirstResponseError(error)));
          }
        });
    }
  }


  static signUp({ email, password, confirmPassword }) {
    return dispatch => {
      dispatch(AuthActions.signUpRequest({ email, password, confirmPassword }));
      authAPI.signup({ email, password, confirmPassword })
        .then(res => res.data)
        .then(user => {
          setUserToken(user.token);
          redirectToWelcomePage();

          dispatch(AuthActions.signUpSuccess(user))
          return user;
        })
        .catch(error => {
          if (ServerErrorCatcher.hasResponseError(error)) {
            dispatch(AuthActions.signUpFailure(ServerErrorCatcher.getFirstResponseError(error)))
          }
        });
    }
  }

}
