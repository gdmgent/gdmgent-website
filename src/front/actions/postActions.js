import { POSTS_FETCHING, POSTS_FETCHED, POSTS_FETCHING_ERROR } from '../constants';

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