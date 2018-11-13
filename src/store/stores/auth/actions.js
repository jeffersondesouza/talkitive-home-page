export default class AuthActions {
  static LOGIN_REQUEST = 'auth:LOGIN_REQUEST';
  static LOGIN_SUCCESS = 'auth:LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'auth:LOGIN_FAILURE';

  static login() {
    return {
      type: AuthActions.LOGIN_REQUEST
    }
  }


}
