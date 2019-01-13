import unsplash from "../apis/unsplash";
import { baseUrl } from "../resources/url";
import axios from "axios";

export const fetchSearchResults = term => async dispatch => {
  const response = await unsplash.get("/search/photos", {
    params: { query: term, per_page: 12 }
  });

  dispatch({
    type: "FETCH_SEARCH_RESULTS",
    payload: response.data
  });
};

export const fetchProductsSearch = term => async dispatch => {
  const response = await axios.get(baseUrl + "/" + term);
  dispatch({
    type: "FETCH_PRODUCTS_SEARCH",
    payload: response.data
  });
};
