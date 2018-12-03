import { combineReducers } from 'redux';
import frontReducer from '../../front/reducers';

export default combineReducers({
  front: frontReducer,
});