import axios from "axios";
import { baseUrl } from "../resources/url.js";
import trovit from "../apis/trovit.js";
import { FETCH_USER_PRODUCTS, CLEAN_USER_PRODUCTS } from "./types";

export function productCreateRequest(productData) {
  return (dispatch, getState) => {
    const { user } = getState().auth;
    let id = 0;

    return axios({
      method: "GET",
      url: baseUrl + "users/" + user.id + "/user_type",
      responseType: "json"
    }).then(response => {
      id = response.data["0"].id;
      axios({
        method: "POST",
        url: baseUrl + "distributors/" + id + "/products",
        responseType: "json",
        data: {
          quantity: productData.quantity,
          price: productData.price,
          producType: productData.producType,
          brand: productData.brand,
          productName: productData.productName,
          description: productData.description
        }
      })
        .then(function(response) {
          console.log("Product response");
          console.log(response);
        })
        .catch(function(error) {
          console.log("Product response error");
          console.log(error);
        });
    });
  };
}

export const fetchUserProducts = (id, page) => async dispatch => {
  const response = await trovit.get(`/users/${id}/user_type`);
  console.log(response.data);
  const response2 = await trovit.get(
    `/distributors/${response.data[0].id}/products`
  );

  dispatch({
    type: FETCH_USER_PRODUCTS,
    payload: response2.data
  });
};

export const cleanUserProducts = () => {
  return { type: CLEAN_USER_PRODUCTS };
};

export const rateProduct = (id, rating) => async (dispatch, getState) => {
  const { user } = getState().auth;
  await trovit.patch(`products/${id}`, {
    userId: user.id,
    userRating: rating
  });

  dispatch();
};
