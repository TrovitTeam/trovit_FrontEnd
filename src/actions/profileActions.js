import axios from 'axios';

export function userProfileRequest(userData){
    return dispatch => {
        //return axios.post('http://localhost:3000/users', userData);
        console.log(userData.name);
        const Start_url = 'http://localhost:3000/';
        const Act_url;
        if (userData.userType==="businessManager"){
            Act_url = Start_url + "business_managers/"
            return axios({
                method:'PUT',
                url: Act_url,
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
        } else if (userData.userType==="distributor"){
            Act_url = Start_url + "distributors/"
            return axios({
                method:'PUT',
                url: Act_url,
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
}
