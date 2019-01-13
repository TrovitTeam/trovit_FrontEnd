import trovit from "../apis/trovit";
import { FETCH_USER_INFO } from "./types";

export const fetchUserInfo = id => async dispatch => {
  const response = await trovit.get(`/users/${id}`);

  dispatch({
    type: FETCH_USER_INFO,
    payload: response.data
  });
};
