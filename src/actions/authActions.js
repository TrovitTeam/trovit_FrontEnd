import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import { baseUrl } from "../resources/url.js";

export const setCurrentUser = data => async dispatch => {
	const response = await axios({
		method: "get",
		url: baseUrl + "users/" + data,
		responseType: "json"
	});

	dispatch({
		type: "SET_CURRENT_USER",
		payload: response.data
	});
};

export function logout() {
	return dispatch => {
		localStorage.removeItem("jwtToken");
		setAuthorizationToken(false);
		dispatch({
			type: "UNSET_CURRENT_USER"
		});
	};
}

export function login(data) {
	return dispatch => {
		return axios({
			method: "post",
			url: baseUrl + "user_token",
			responseType: "json",
			data: {
				auth: {
					email: data.email,
					password: data.password
				}
			}
		}).then(response => {
			const token = response.data.jwt;
			localStorage.setItem("jwtToken", token);
			setAuthorizationToken(token);
			const decoded = jwt_decode(token);
			const id = decoded.sub;

			axios({
				method: "get",
				url: baseUrl + "users/" + id,
				responseType: "json"
			}).then(response => {
				dispatch(setCurrentUser(response.data.id));
			});
		});
	};
}

export function loginFacebook(data) {
	return dispatch => {
		return axios({
			method: "POST",
			url: baseUrl + "users/fb_create/",
			responseType: "json",
			data: {
				accessToken: data.accessToken,
				user: {
					email: data.email,
					name: data.name,
					userType: data.userType,
					password: data.id
				}
			}
		}).then(response => {
			dispatch(login(response.data));
		});
	};
}
