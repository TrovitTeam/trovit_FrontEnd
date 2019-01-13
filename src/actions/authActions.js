import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../resources/url.js";
import history from "../history";

export const setCurrentUser = id => async dispatch => {
  const response = await axios({
    method: "get",
    url: baseUrl + "users/" + id,
    responseType: "json"
  });

  dispatch({
    type: "SET_CURRENT_USER",
    payload: response.data
  });
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
  history.push("/");
  return {
    type: "UNSET_CURRENT_USER"
  };
};

export const login = data => async dispatch => {
  const response = await axios({
    method: "post",
    url: baseUrl + "user_token",
    responseType: "json",
    data: {
      auth: {
        email: data.email,
        password: data.password
      }
    }
  });

  const token = response.data.jwt;
  localStorage.setItem("jwtToken", token);
  setAuthorizationToken(token);
  const decoded = jwt_decode(token);
  const id = decoded.sub;

  const response2 = await axios({
    method: "get",
    url: baseUrl + "users/" + id,
    responseType: "json"
  });

  dispatch(setCurrentUser(response2.data.id));

  history.push("/");
};

export const loginFacebook = data => async dispatch => {
  const response = await axios({
    method: "POST",
    url: baseUrl + "users/fb_create/",
    responseType: "json",
    data: {
      accessToken: data.accessToken,
      user: {
        email: data.email,
        name: data.name,
        userType: data.userType,
        password: data.id
      }
    }
  });

  dispatch(login(response.data));
};
