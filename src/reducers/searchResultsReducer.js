import { CLEAN_SEARCH_RESULTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_RESULTS":
      return action.payload;
    case "FETCH_PRODUCTS_SEARCH":
      return action.payload;
    case CLEAN_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
};
