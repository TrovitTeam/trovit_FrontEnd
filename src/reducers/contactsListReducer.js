import { FETCH_USERS_INFO } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_INFO:
      return action.payload;
    default:
      return state;
  }
};
