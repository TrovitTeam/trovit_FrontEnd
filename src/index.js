import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Landing_page from "./components/Landing_page";
import Product_info from "./components/Product_info";
import Profile from "./components/Profile";
import Log_in from "./components/Log_in";
import Sign_in from "./components/Sign_in";
import Contact from "./components/Contact";
import Search_result from "./components/Search_result";
import Send_email from "./components/Send_email";
import Setting from "./components/Setting";
import FooterPage from "./components/FooterPage";
import ProductPage from './components/ProductPage';
import axios from "axios";
import jwt_decode from "jwt-decode";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import setAuthorizationToken from "./utils/setAuthorizationToken";

import rootReducer from "./components/rootReducer";
import { SET_CURRENT_USER } from "./actions/types";
import { setCurrentUser } from "./actions/authActions";
import statistics from "./components/statistics";
import { baseUrl } from "./resources/url.js";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);

	const token = localStorage.jwtToken;

	const decoded = jwt_decode(token);
	const id = decoded.sub;

	axios({
		method: "get",
		url: baseUrl + "users/" + id,
		responseType: "json"
	}).then(response => {
		console.log(response);
		store.dispatch(setCurrentUser(response.data));
	});
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<div className="main-container">
					<Route path="/" component={Header} />
					<Route path="/" component={Menu} />
					<Route exact path="/" component={Landing_page} />
					<Route path="/Contact" component={Contact} />
					<Route path="/Log_in" component={Log_in} />
					<Route path="/Sign_in" component={Sign_in} />
					<Route path="/Product_Info" component={Product_info} />
					<Route path="/Profile" component={Profile} />
					<Route path="/Search_result" component={Search_result} />
					<Route path="/Send_email" component={Send_email} />
					<Route path="/Setting" component={Setting} />
					<Route path="/Statistics" component={statistics} />
					<Route path="/ProductPage" component={ProductPage} />
				</div>
				<FooterPage />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
