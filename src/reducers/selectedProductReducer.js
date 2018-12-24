export default (state = {}, action) => {
	switch (action.type) {
		case "SELECT_PRODUCT":
			return action.payload;
		case "SELECTED_PRODUCT":
			return action.payload;
		case "UNSELECT_PRODUCT":
			return {};
		default:
			return state;
	}
};
