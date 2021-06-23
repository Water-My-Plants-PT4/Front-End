import {
  USER_LOGIN,
  SET_USER_TOKEN,
  FETCH_PLANTS,
  SET_USER_PLANTS,
} from '../actions';

const initialState = {
  username: '',
  password: '',
  phonenumber: '',
  plantsArray: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
      };
    case FETCH_PLANTS:
      return {
        ...state,
      };
    case SET_USER_PLANTS:
      return {
        ...state,
        plantsArray: [...action.payload],
      };
    default:
      return state;
  }
};
