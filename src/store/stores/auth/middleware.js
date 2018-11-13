import AuthActions from './actions'

export default class AuthMiddleware {
  static login() {
    console.log('photoId');
    return dispatch => {
      dispatch(AuthActions.login())
    }
  }

}
