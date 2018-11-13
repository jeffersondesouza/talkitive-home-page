import AuthActions from './actions';

export const INITIAL_STATE = {
  isLoggin: false,
  token: '',
}

function AuthReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      console.log({ state, action });

      return {
        ...state,
      }
    case AuthActions.LOGIN_SUCCESS:
      return {
      }
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default AuthReducer;
