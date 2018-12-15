export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_SEARCH_RESULTS":
			console.log("hola1");
			console.log(action.payload);
			return action.payload;
		default:
			console.log("hola");
			return state;
	}
};
