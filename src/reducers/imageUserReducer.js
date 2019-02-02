import { 
    FETCH_IMAGE_USER, 
    UPLOAD_IMAGE_USER, 
    CLEAN_IMAGE_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGE_USER:
      return action.payload;
    case UPLOAD_IMAGE_USER:
      return action.payload;
    case CLEAN_IMAGE_USER:
      return {};
    default:
      return state;
  }
};