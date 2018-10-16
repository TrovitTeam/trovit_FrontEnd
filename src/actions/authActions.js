import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt_decode from "jwt-decode";
import {SET_CURRENT_USER} from "./types";



export function setCurrentUser(user)
{
    return
    {
        type: SET_CURRENT_USER,
        user
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
            console.log(jwt_decode(token));
        });
    }
} 