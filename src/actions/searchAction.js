import unsplash from "../apis/unsplash";
import trovitAPI from "../apis/trovit";
import { baseUrl } from "../resources/url";
import axios from "axios";
import { CLEAN_SEARCH_RESULTS } from "./types";

export const fetchSearchResults = (term, page) => async dispatch => {
  const response = await unsplash.get("/products", {
    params: { query: term, per_page: 12, page }
  });

  dispatch({
    type: "FETCH_SEARCH_RESULTS",
    payload: response.data
  });
};

export const fetchProductsSearch = term => async dispatch => {
  const response = await axios.get(baseUrl+"products/" + term);
  dispatch({
    type: "FETCH_PRODUCTS_SEARCH",
    payload: response.data
  });
};

export const cleanSearchResults = () => {
  return { type: CLEAN_SEARCH_RESULTS };
};
