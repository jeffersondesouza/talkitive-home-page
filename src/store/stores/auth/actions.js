export default class AuthReducerActions {
  static FETCH_CHAPTERS_REQUEST = 'auth:FETCH_CHAPTERS_REQUEST';
  static FETCH_CHAPTERS_SUCCESS = 'auth:FETCH_CHAPTERS_SUCCESS';
  static FETCH_CHAPTERS_REJECTE = 'auth:FETCH_CHAPTERS_REJECTE';

  static fetchChaptersRequest() {
    return {
      type: AuthReducerActions.FETCH_CHAPTERS_REQUEST
    }
  }

  static fetchChaptersSuccessful(payload) {
    return {
      type: AuthReducerActions.FETCH_CHAPTERS_SUCCESSFUL,
      payload: payload
    }
  }

  static fetchChaptersRejected(error) {
    return {
      type: AuthReducerActions.FETCH_CHAPTERS_REJECTED,
      payload: error
    }
  }
}
