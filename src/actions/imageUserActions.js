import trovitAPI from "../apis/trovit";
import { baseUrl } from "../resources/url";
import axios from "axios";
import { CLEAN_IMAGE_USER } from "./types";

export const fetchImageUser = () => async (dispatch, getState) => {
    const { user } = getState().auth;
    let id = 0;

    const responseId = await axios({
        method: "GET",
        url: baseUrl + "users/" + user.id + "/user_type",
        responseType: "json"
    })

    id = responseId.data["0"].id;
    let type = "";

    if (user.userType === "distributor") {
        type = "distributors";
    } else {
        type = "business_managers";
    }

    const response = await axios({
        method: "GET",
        url: baseUrl + type + "/" + id + "/pictures",
        data: fData
    });
    dispatch({
        type: "FETCH_IMAGE_USER",
        payload: response.data
    });
};


export const uploadImageUser = (fData) => async (dispatch, getState) => {
    const { user } = getState().auth;
    let id = 0;

    const responseId = await axios({
        method: "GET",
        url: baseUrl + "users/" + user.id + "/user_type",
        responseType: "json"
    })

    id = responseId.data["0"].id;
    let type = "";

    if (user.userType === "distributor") {
        type = "distributors";
    } else {
        type = "business_managers";
    }

    const response = await axios({
        method: "POST",
        url: baseUrl + type + "/" + id + "/pictures",
        data: fData
    });

    dispatch({
        type: "UPLOAD_IMAGE_USER",
        payload: response.data
    });
};

export const cleanImageUser = () => async dispatch => {
    dispatch({
        type: CLEAN_IMAGE_USER
    });
};
  

