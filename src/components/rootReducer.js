import { combineReducers } from "redux";

import auth from "../reducers/auth";
import searchResultsReducer from "../reducers/searchResultsReducer";
import selectedProductReducer from "../reducers/selectedProductReducer";
import userReducer from "../reducers/userReducer";
import { reducer as formReducer } from "redux-form";
import contactsListReducer from "../reducers/contactsListReducer";
import userProductsReducer from "../reducers/userProductsReducer";

export default combineReducers({
  searchResults: searchResultsReducer,
  selectedProduct: selectedProductReducer,
  auth,
  form: formReducer,
  selectedUser: userReducer,
  contactsList: contactsListReducer,
  userProducts: userProductsReducer
});
