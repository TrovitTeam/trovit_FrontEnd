import { CLEAN_SELECTED_PRODUCT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return action.payload;
    case "SELECTED_PRODUCT":
      return action.payload;
    case CLEAN_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
