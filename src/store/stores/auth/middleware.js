import AuthActions from './actions'

import { setUserToken } from '../../../utils/LocalStorageManager';
import { redirectToWelcomePage } from '../../../utils/RouterRedirector';
import authAPI from '../../api/auth-api'

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
          dispatch(AuthActions.loginFailure(error))
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
          dispatch(AuthActions.signUpFailure(error))
        });
    }
  }

}
