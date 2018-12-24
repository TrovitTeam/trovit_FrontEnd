import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import Header from "../components/Header";
//import Menu from "../components/Menu";
import Menu from "../components/MenuRe";

//import Landing_page from "../components/Landing_page";
import Landing_page from "../components/LandingPageRe";

import Product_info from "../components/Product_info";
import Profile from "../components/Profile";
import Log_in from "../components/Log_in";
import Sign_in from "../components/Sign_in";
import Contact from "../components/Contact";
import Search_result from "../components/Search_result";
import Send_email from "../components/Send_email";
import Setting from "../components/Setting";
import FooterPage from "../components/FooterPage";
import ProductPage from "../components/ProductPage";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import LandingPageRE from "./LandingPageRe";
import "../styles/index.css";
import rootReducer from "../components/rootReducer";
import { setCurrentUser } from "../actions/authActions";
import statistics from "../components/statistics";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

const App = () => {
	if (localStorage.jwtToken) {
		const token = localStorage.jwtToken;
		setAuthorizationToken(token);

		const decoded = jwt_decode(token);
		const id = decoded.sub;
		console.log("adada", id);
		store.dispatch(setCurrentUser(id));
	}

	return (
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
		</Provider>
	);
};

export default App;
