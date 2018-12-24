import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Row, Col } from "react-materialize";
import logo from "../resources/LogoNoBack.png";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import { logout } from "../actions/authActions";

import SearchBar from "./SearchBar";
import UnsplashSearchBar from "./UnsplashSearchBar";
import PropTypes from "prop-types";

class MenuRe extends Component {
	logout = event => {
		event.preventDefault();
		this.props.logout();
		this.props.history.push("/");
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const contactsLink = (
			<MenuItem history={this.props.history} text="Contacts" link="/Contact" />
		);
		const productsLink = (
			<MenuItem
				history={this.props.history}
				text="Products"
				link="/Product_Info"
			/>
		);
		const loginLink = (
			<MenuItem
				history={this.props.history}
				text="Log In"
				link="/Log_in"
				align="right"
			/>
		);
		const signUpLink = (
			<MenuItem
				history={this.props.history}
				text="Sign up"
				link="/Sign_in"
				align="right"
			/>
		);
		const logOutLink = (
			<NavItem className="right" onClick={e => this.logout(e)}>
				Log Out
			</NavItem>
		);
		const profileLink = (
			<MenuItem
				history={this.props.history}
				text="Profile"
				link="/Profile"
				align="right"
			/>
		);

		let a = false;

		return (
			<Navbar className="blue-grey">
				<NavItem
					onClick={e => {
						e.preventDefault();
						this.props.history.push("/");
					}}
				>
					<div style={{ height: "64px" }}>
						<img
							className="material-boxed"
							width="100%"
							height="100%"
							style={{ padding: 3 + "%" }}
							src={logo}
							alt="Trovit"
						/>
					</div>
				</NavItem>
				{isAuthenticated ? contactsLink : null}
				{user.userType === "distributor" ? productsLink : null}
				{isAuthenticated ? logOutLink : signUpLink}
				{isAuthenticated ? profileLink : loginLink}

				<NavItem
					style={{ float: "right" }}
					className="right"
					onClick={e => e.preventDefault()}
					className="grey lighten-2"
				>
					<UnsplashSearchBar history={this.props.history} />
				</NavItem>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(
	mapStateToProps,
	{ logout }
)(MenuRe);
