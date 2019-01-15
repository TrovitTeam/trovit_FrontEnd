import { FETCH_USER_PRODUCTS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
