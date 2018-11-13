export default class AuthActions {
  static LOGIN_REQUEST = 'auth:LOGIN_REQUEST';
  static LOGIN_SUCCESS = 'auth:LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'auth:LOGIN_FAILURE';

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
      payload: { ...error }
    }
  }



}
