export default class AuthActions {
  static LOGIN_REQUEST = 'auth:LOGIN_REQUEST';
  static LOGIN_SUCCESS = 'auth:LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'auth:LOGIN_FAILURE';

  static SIGNUP_LOGIN_REQUEST = 'auth:SIGNUP_LOGIN_REQUEST';
  static SIGNUP_LOGIN_SUCCESS = 'auth:SIGNUP_LOGIN_SUCCESS';
  static SIGNUP_LOGIN_FAILURE = 'auth:SIGNUP_LOGIN_FAILURE';

  static loginRequest({ email, password }) {
    return {
      type: AuthActions.LOGIN_REQUEST,
      payload: { email, password }
    }
  }

  static loginSuccess(user) {
    return {
      type: AuthActions.LOGIN_SUCCESS,
      payload: user
    }
  }

  static loginFailure(error) {
    return {
      type: AuthActions.LOGIN_FAILURE,
      payload: error
    }
  }

  static signUpRequest({ email, password, confirmPassword }) {
    return {
      type: AuthActions.SIGNUP_LOGIN_REQUEST,
      payload: { email, password, confirmPassword }
    }
  }

  static signUpSuccess(user) {
    return {
      type: AuthActions.SIGNUP_LOGIN_SUCCESS,
      payload: user
    }
  }

  static signUpFailure(error) {
    return {
      type: AuthActions.SIGNUP_LOGIN_FAILURE,
      payload: error
    }
  }

}
