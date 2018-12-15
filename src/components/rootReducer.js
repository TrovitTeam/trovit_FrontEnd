import { combineReducers } from "redux";

import flashMessages from "../reducers/flashMessages";
import auth from "../reducers/auth";
import searchResultsReducer from "../reducers/searchResultsReducer";
import selectedProductReducer from "../reducers/selectedProductReducer";

export default combineReducers({
	searchResults: searchResultsReducer,
	selectedProduct: selectedProductReducer,
	flashMessages,
	auth
});
