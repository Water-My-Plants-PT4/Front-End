import {
  USER_LOGIN,
  FETCH_PLANTS,
  SET_USER_PLANTS,
  DELETE_PLANT,
} from '../actions';

const initialState = {
  username: '',
  password: '',
  phone_number: '',
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
    case DELETE_PLANT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
