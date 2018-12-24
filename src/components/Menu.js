import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Row, Col } from "react-materialize";
import logo from "../resources/LogoNoBack.png";
import { connect } from "react-redux";

import { logout } from "../actions/authActions";

import SearchBar from "./SearchBar";
import UnsplashSearchBar from "./UnsplashSearchBar";
import PropTypes from "prop-types";

class Menu extends Component {
	logout = event => {
		event.preventDefault();
		this.props.logout();
		this.context.router.history.push("/");
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const contactsLink = <Link to="/Contact">Contacts</Link>;

		const productsLink = (
			<Link className="right" to="/Product_Info">
				Products
			</Link>
		);

		const userLinks = (
			<div className="right">
				<a className="right" href={"/"} onClick={this.logout}>
					Logout
				</a>
				<Link className="right" to="/Profile">
					Profile
				</Link>
			</div>
		);

		const guestLinks = (
			<div className="right">
				<Link className="right" to="/Sign_in">
					Sign up
				</Link>
				<Link className="right" to="/Log_in">
					Login
				</Link>
			</div>
		);

		let a = false;

		return (
			<div className="container-fluid">
				<Navbar className="blue-grey">
					<Row className="valing-wrapper">
						<Col s={1}>
							<Link to="/">Home</Link>
						</Col>
						<Col s={1}>{isAuthenticated ? contactsLink : null}</Col>
						<Col s={1}>
							{user.userType === "distributor" ? productsLink : null}
						</Col>
						<Col className="center" s={2}>
							<a className="brand-logo active" id="logo-container">
								<img
									className="material-boxed"
									width="100%"
									height="100%"
									style={{ padding: 3 + "%" }}
									src={logo}
									alt="Trovit"
								/>
							</a>
						</Col>
						<Col className="offset-s1" s={4}>
							<NavItem
								onClick={e => e.preventDefault()}
								className="grey lighten-2"
							>
								<UnsplashSearchBar history={this.props.history} />
							</NavItem>
						</Col>
						<Col s={2}>{isAuthenticated ? userLinks : guestLinks}</Col>
					</Row>
				</Navbar>
			</div>
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
)(Menu);
