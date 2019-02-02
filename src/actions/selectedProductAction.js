import trovit from "../apis/trovit";
import { CLEAN_SELECTED_PRODUCT } from "./types";

export const fetchSelectedProduct = (did, pid) => async dispatch => {
  const response = await trovit.get(`distributors/${did}/products/${pid}`);
  console.log(response);
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
