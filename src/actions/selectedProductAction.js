import unsplash from "../apis/unsplash";
import { CLEAN_SELECTED_PRODUCT } from "./types";

export const fetchProductInfo = id => async dispatch => {
  const response = await unsplash.get(`/photos/${id}`);

  dispatch({
    type: "SELECT_PRODUCT",
    payload: response.data
  });
};

export const fetchSelectedProduct = id => async dispatch => {
  const response = await unsplash.get(`/photos/${id}`);

  dispatch({
    type: "SELECTED_PRODUCT",
    payload: response.data
  });
};

export const cleanSelectedProduct = () => async dispatch => {
  dispatch({
    type: CLEAN_SELECTED_PRODUCT
  });
};
