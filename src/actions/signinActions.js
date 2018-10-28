import axios from 'axios';

export function userSigninRequest(userData){
    return dispatch => {
        //return axios.post('http://localhost:3000/users', userData);
        console.log(userData.name);
        return axios({
                    method:'post',
                    url:'http://localhost:3000/users',
                    responseType: "json",
                    data: {
                        "user":
                        {
                        "name": userData.name,
                        "location": "Bogota",
                        "userType": userData.userType,
                        "phone": userData.phone,
                        "email": userData.email,
                        "password": userData.password
                        }
                    }
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
}

