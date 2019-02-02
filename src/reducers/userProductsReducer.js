import { FETCH_USER_PRODUCTS, CLEAN_USER_PRODUCTS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_PRODUCTS:
      return action.payload;
    case CLEAN_USER_PRODUCTS:
      return null;
    default:
      return state;
  }
};
