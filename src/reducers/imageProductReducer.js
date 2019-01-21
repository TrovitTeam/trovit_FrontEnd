import { 
    FETCH_IMAGE_PRODUCT, 
    UPLOAD_IMAGE_PRODUCT, 
    CLEAN_IMAGE_PRODUCT} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGE_PRODUCT:
      return action.payload;
    case UPLOAD_IMAGE_PRODUCT:
      return action.payload;
    case CLEAN_IMAGE_PRODUCT:
      return {};
    default:
      return state;
  }
};
