import axios from "axios"

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
        });
    }
}