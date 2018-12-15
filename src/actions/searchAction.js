import unsplash from "../apis/unsplash";

export const fetchSearchResults = term => async dispatch => {
	const response = await unsplash.get("/search/photos", {
		params: { query: term }
	});

	console.log(response);

	dispatch({
		type: "FETCH_SEARCH_RESULTS",
		payload: response.data.results
	});
};
