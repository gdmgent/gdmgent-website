import { POST_CREATE, POST_CREATE_ERROR, POST_UPDATE, POST_UPDATE_ERROR } from '../constants';

const initialState = {
  postCreated: false,
  postUpdated: false,
  post: undefined,
  error: undefined
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CREATE:
      return Object.assign({}, state, {
        postCreated: true,
        post: action.payload
      });
    case POST_CREATE_ERROR:
      return Object.assign({}, state, {
        postCreated: false,
        error: action.payload
      });
    case POST_UPDATE:
      return Object.assign({}, state, {
        postUpdated: true,
        post: action.payload
      });
    case POST_UPDATE_ERROR:
      return Object.assign({}, state, {
        postUpdated: false,
        error: action.payload
      });
    default:
      return state;
  }
}

export default postReducer;
