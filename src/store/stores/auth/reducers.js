import ChaptersActions from './actions';

export const INITIAL_STATE = {
  items: null,
  isProcessing: false,
  isError: false,
  errorMessage: '',
  syllabus_id: null
}

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ChaptersActions.FETCH_CHAPTERS_REQUEST:
      return {
        ...state,
        isProcessing: true,
        isError: false,
        errorMessage: ''
      }
    case ChaptersActions.FETCH_CHAPTERS_SUCCESSFUL:
      return {
        isProcessing: false,
        isError: false,
        items: action.payload,
        errorMessage: ''
      }
    case ChaptersActions.FETCH_CHAPTERS_REJECTED:
      return {
        ...state,
        isProcessing: false,
        items: null,
        isError: true,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default AuthReducer;
