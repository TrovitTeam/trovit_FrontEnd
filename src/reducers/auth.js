import isEmpty from "lodash/isEmpty";

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case "UNSET_CURRENT_USER":
			return {
				isAuthenticated: false,
				user: {}
			};
		default:
			return state;
	}
};
