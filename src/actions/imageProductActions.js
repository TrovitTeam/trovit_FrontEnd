import trovitAPI from "../apis/trovit";
import { baseUrl } from "../resources/url";
import axios from "axios";
import { CLEAN_IMAGE_PRODUCT } from "./types";

const loggedID = () => async getState =>{
    const { user } = getState().auth;
    let id = 0;

    const responseId = await axios({
        method: "GET",
        url: baseUrl + "users/" + user.id + "/user_type",
        responseType: "json"
    })

    id = responseId.data["0"].id;
    return id;
}

const loggedType = () => async getState =>{
    const { user } = getState().auth;
    let type = "";

    if (user.userType === "distributor") {
        type = "distributors";
    } else {
        type = "business_managers";
    }

    return type;
}

export const fetchImageProduct = () => async dispatch => {
    const id = loggedID();
    const response = await trovitAPI.get("/products/"+id+"/pictures");

    dispatch({
        type: "FETCH_IMAGE_PRODUCT",
        payload: response.data
    });
};

export const uploadImageProduct = (fData) => async dispatch => {
    const type = loggedType();
    const id = loggedID();

    const response = await axios({
        method: "POST",
        url: baseUrl +"products/" + id + "/pictures",
        data: fData
    });

    dispatch({
        type: "UPLOAD_IMAGE_PRODUCT",
        payload: response.data
    });
};


export const cleanImageProduct = () => async dispatch => {
    dispatch({
        type: CLEAN_IMAGE_PRODUCT
    });
};
  

