import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import {SET_CURRENT_USER} from "./types";



export function setCurrentUser(user)
{
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logout()
{
    return dispatch => {
        localStorage.removeItem("jwtToken");
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function login(data)
{
    return dispatch => {

        return  axios({
            method:'post',
            url:'http://localhost:3000/user_token',
            responseType: "json",
            data: {
                "auth":
                {
                "email": data.email,
                "password": data.password
                }
            }
        })
        .then(response =>  {

            const token = response.data.jwt;
            localStorage.setItem("jwtToken", token);
            setAuthorizationToken(token);
            const decoded = jwt_decode(token);
            const id = decoded.sub;

            axios({
                    method: "get",
                    url:'http://localhost:3000/users/' + id,
                    responseType: "json"
            })
            .then(response => {

                console.log(response);
                dispatch(setCurrentUser(response.data));
            })            
        });
    }
} 


export function loginFacebook(data)
{
    console.log(data.userType);

    return dispatch => {

        return  axios({
            method:'POST',
            url:'http://localhost:3000/users/fb_create/',
            responseType: "json",
            data: {
                "accessToken": data.accessToken,
                "user": {
                    "email": data.email,
                    "name":data.name,
                    "userType": data.userType,
                    "password": data.id
                }
            }
            
        })
        .then(response =>  {

            console.log(response);
            dispatch(login(response.data));
        });
    }
} 