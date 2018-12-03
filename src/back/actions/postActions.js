import { POST_CREATE, POST_CREATE_ERROR, POSTS_FETCHING, POSTS_FETCHED, POSTS_FETCHING_ERROR } from '../constants';

export function fetchPosts() {
  return async (dispatch) => {
    try {
      dispatch({ 
        type: POSTS_FETCHING
      });

      const options = {
          method: 'POST',
          mode: 'cors',
          cache: 'default'
      };
      const response = await fetch('/api/v1/posts', options);
      const responseJson = await response.json();

      dispatch({ 
        type: POSTS_FETCHED,
        payload: responseJson
      });

    } catch(error) {
      dispatch({
        type: POSTS_FETCHING_ERROR,
        payload: {
          message: 'Invalid post data',
          exception: error
        }
      });
    }
  };
}

export function createPost({ title, synopsis, body, category }, history) {
  return async (dispatch) => {
    try {
      const postData = new Blob([JSON.stringify({title: title, synopsis: synopsis, body: body, _category: category}, null, 2)], {type : 'application/json'});
      const options = {
          method: 'POST',
          body: postData,
          mode: 'cors',
          cache: 'default'
      };
      const response = await fetch('/api/v1/posts', options);
      const responseJson = await response.json();

      dispatch({ 
        type: POST_CREATE,
        payload: responseJson
      });

    } catch(error) {
      dispatch({
        type: POST_CREATE_ERROR,
        payload: {
          message: 'Invalid post data',
          exception: error
        }
      });
    }
  };
}