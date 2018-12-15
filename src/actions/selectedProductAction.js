import unsplash from "../apis/unsplash";

export const fetchProductInfo = id => async dispatch => {
	const response = await unsplash.get(`/photos/${id}`);

	console.log("hey", response);

	dispatch({
		type: "SELECT_PRODUCT",
		payload: response.data
	});
};
