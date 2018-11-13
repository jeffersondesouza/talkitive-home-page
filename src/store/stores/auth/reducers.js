import AuthActions from './actions';

export const INITIAL_STATE = {
  isLoggin: false,
  isSignigUp: false,
  token: '',
  user: null,
}

function AuthReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggin: true,
        user: INITIAL_STATE.user,
      }
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggin: false,
        user: { ...action.payload }
      }
    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggin: false,
        error: { ...action.payload }
      }
    case AuthActions.SIGNUP_LOGIN_REQUEST:
      return {
        ...state,
        isSignigUp: true,
        user: INITIAL_STATE.user,
      }
    case AuthActions.SIGNUP_LOGIN_SUCCESS:
      return {
        ...state,
        isSignigUp: false,
        user: { ...action.payload }
      }
    case AuthActions.SIGNUP_LOGIN_FAILURE:
      return {
        ...state,
        isSignigUp: false,
        error: { ...action.payload }
      }

    default:
      return state
  }
}

export default AuthReducer;
