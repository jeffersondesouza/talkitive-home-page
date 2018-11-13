import AuthActions from './actions';

export const INITIAL_STATE = {
  isLoggin: false,
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
    default:
      return state
  }
}

export default AuthReducer;
