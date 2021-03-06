import React from "react";
import { Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

//import Menu from "../components/Menu";
import Menu from "../components/MenuRe";

//import Landing_page from "../components/Landing_page";
import LandingPage from "../components/LandingPageRe";

import ProductInfo from "./products/ProductInfo";
import Profile from "./ProfileRe";
import ProfileEdit from "./ProfileEdit";
import LogIn from "../components/auth/LogIn";
import SignIn from "../components/auth/SignIn";
import Contacts from "./ContactsRe";
import SearchResult from "../components/SearchResult";
import SendEmail from "../components/SendEmail";
import Setting from "../components/Setting";
import FooterPage from "../components/FooterPage";
import ProductPage from "./products/ProductPage";
import ProductCreate from "./products/ProductCreate";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import "../styles/index.css";
import { setCurrentUser } from "../actions/authActions";
import Statistics from "../components/Statistics";
import history from "../history";

const App = props => {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthorizationToken(token);

    const decoded = jwt_decode(token);
    const id = decoded.sub;
    props.store.dispatch(setCurrentUser(id));
  }

  return (
    <Router history={history}>
      <div className="main-container">
        <div className="normal">
          <Route path="/" component={Menu} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/Contacts/:id" component={Contacts} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/ProductInfo/:id" component={ProductInfo} />
          <Route path="/Profile/:id" component={Profile} />
          <Route path="/ProfileEdit/:id" component={ProfileEdit} />
          <Route path="/SearchResult/:term" component={SearchResult} />
          <Route path="/SendEmail" component={SendEmail} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Statistics" component={Statistics} />
          <Route path="/ProductPage/:did/:pid" component={ProductPage} />
          <Route path="/Product/new" component={ProductCreate} />
        </div>
        <div className="footer">
          <Route path="/" component={FooterPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
