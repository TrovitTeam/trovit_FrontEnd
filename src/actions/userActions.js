import trovit from "../apis/trovit";
import {
  FETCH_USER_INFO,
  FETCH_USERS_INFO,
  CLEAN_SELECTED_USER,
  CLEAN_USER_CONTACTS
} from "./types";
import history from "../history";

export const fetchUserInfo = id => async dispatch => {
  const response = await trovit.get(`/users/${id}`);

  dispatch({
    type: FETCH_USER_INFO,
    payload: response.data
  });
};

export const fetchUsersInfo = () => async dispatch => {
  const response = await trovit.get("/users");
  dispatch({
    type: FETCH_USERS_INFO,
    payload: response.data
  });
};

export const updateUserInfo = (id, formValues) => async dispatch => {
  const response = trovit.patch(`/users/${id}`, formValues);
  console.log(response);

  dispatch({ type: "EDIT_PROFILE" });
  dispatch({ type: CLEAN_SELECTED_USER });
  history.push(`/Profile/${id}`);
};

export const cleanSelectedUser = () => {
  return { type: CLEAN_SELECTED_USER };
};

export const fetchUserContacts = () => async dispatch => {
  const response = await trovit.get("/users");
  console.log(response.data);
  dispatch({
    type: FETCH_USERS_INFO,
    payload: response.data
  });
};

export const cleanUserContacts = () => {
  return { type: CLEAN_USER_CONTACTS };
};
