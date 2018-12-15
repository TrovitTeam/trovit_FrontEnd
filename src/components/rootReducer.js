import { combineReducers } from "redux";

import flashMessages from "../reducers/flashMessages";
import auth from "../reducers/auth";
import searchResultsReducer from '../reducers/searchResultsReducer';

export default combineReducers({
    searchResults: searchResultsReducer,
    flashMessages,
    auth
});