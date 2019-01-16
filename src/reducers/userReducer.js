import { FETCH_USER_INFO, CLEAN_SELECTED_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return action.payload;
    case CLEAN_SELECTED_USER:
      return {};
    default:
      return state;
  }
};
