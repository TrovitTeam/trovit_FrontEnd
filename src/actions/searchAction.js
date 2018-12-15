import unsplash from "../apis/unsplash";

export const fetchSearchResults = term => async dispatch => {
	const response = await unsplash.get("/search/photos", {
		params: { query: term }
	});

	dispatch({
		type: "FETCH_SEARCH_RESULTS",
		payload: response.data.results
	});
};
