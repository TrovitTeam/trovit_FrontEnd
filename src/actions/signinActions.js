import axios from "axios";
import { baseUrl } from "../resources/url.js";
import history from "../history";

export const userSigninRequest = userData => async dispatch => {
    history.push("/");
    await axios({
      method: "post",
      url: baseUrl + "users",
      responseType: "json",
      data: {
        user: {
          name: userData.name,
          location: "Bogota",
          userType: userData.userType,
          phone: userData.phone,
          email: userData.email,
          password: userData.password
        }
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };