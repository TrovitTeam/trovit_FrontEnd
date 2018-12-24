import unsplash from "../apis/unsplash";
import { baseUrl } from "../resources/url";
import axios from "axios";

export const fetchProductInfo = id => async dispatch => {
	const response = await unsplash.get(`/photos/${id}`);

	dispatch({
		type: "SELECT_PRODUCT",
		payload: response.data
	});
};

export const fetchSelectedProduct = id => async dispatch => {
	const response = await unsplash.get(`/photos/${id}`);
	console.log(response);
	dispatch({
		type: "SELECTED_PRODUCT",
		payload: response.data
	});
};

export const unselectProduct = () => async dispatch => {
	dispatch({
		type: "UNSELECT_PRODUCT"
	});
};
