import { POSTS_FETCHING, POSTS_FETCHING_ERROR, POSTS_FETCHED } from '../constants'

const initialState = {
  postFetching: false,
  posts: undefined,
  error: undefined,
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCHING:
      return Object.assign({}, state, {
        postFetching: true,
        post: action.payload
      });
    case POSTS_FETCHING_ERROR:
      return Object.assign({}, state, {
        postFetching: false,
        error: action.payload
      });
    case POSTS_FETCHED:
      return Object.assign({}, state, {
        postFetching: false,
        posts: action.payload
      });
    default:
      return state
  }
}

export default postReducer;
