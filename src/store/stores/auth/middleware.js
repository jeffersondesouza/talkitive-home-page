import ChaptersActions from './actions'
import localstorage from './../../utils/LocalStorageManager'
import request from './../../utils/requestConfig'

export default class ChaptersMiddleware {
  static fetchChapters ({sid, bid}) {
    return (dispatch) => {
      dispatch(ChaptersActions.fetchChaptersRequest())
      const uid = localstorage.getUser().user.id
      request.get('/units/for_student', {
        params: {
          user_user_id: uid
        }
      })
      .then(({data}) => {
        request.get(`/books/${bid}/chapters_by_syllabus`, {
          params: {
            education_subject_id: sid,
            school_classroom_id: data.data[0].classrooms[0].id
          }
        })
        .then(({data}) => {
          dispatch(ChaptersActions.fetchChaptersSuccessful(data.data))
        })
        .catch((error) => {
          dispatch(ChaptersActions.fetchChaptersRejected(error))
        })
      })
      .catch((error) => {
        dispatch(ChaptersActions.fetchChaptersRejected(error))
      })
    }
  }
}
