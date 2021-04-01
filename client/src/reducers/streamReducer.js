import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload
      // return newState;
      return  { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      // _.mapKeys converts the array to an object and uses the 'id' as the key
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return  { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return  _.omit(state, action.payload); // The payload is the id itself
    default:
      return state;
  }
};
