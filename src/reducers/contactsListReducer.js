import { FETCH_USERS_INFO, CLEAN_USER_CONTACTS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USERS_INFO:
      return action.payload;
    case CLEAN_USER_CONTACTS:
      return null;
    default:
      return state;
  }
};
