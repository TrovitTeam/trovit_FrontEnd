import axios from "axios";
import { baseUrl } from "../resources/url.js";
import trovit from "../apis/trovit.js";
import { FETCH_USER_PRODUCTS, CLEAN_USER_PRODUCTS } from "./types";
import history from "../history";

export const productCreateRequest = (productData) => async (dispatch, getState) => {
    console.log("FormValue Sent");
    console.log(productData);
    const { user } = getState().auth;
    let id = 0;

    const response = await axios({
      method: "GET",
      url: baseUrl + "users/" + user.id + "/user_type",
      responseType: "json"
    })
    
    id = response.data["0"].id;

    console.log("id:"+id)
    history.push("/ProductInfo/"+user.id);

    const nextResponse = await axios({
      method: "POST",
      url: baseUrl + "distributors/" + id + "/products",
      responseType: "json",
      data: {
        quantity: productData.quantity,
        price: productData.price,
        producType: productData.producType,
        brand: productData.brand,
        productName: productData.productName,
        description: productData.description,
        image: productData.image
      }
    })
};


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
