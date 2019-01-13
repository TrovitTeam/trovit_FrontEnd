import axios from "axios";
import { baseUrl } from "../resources/url.js";

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
