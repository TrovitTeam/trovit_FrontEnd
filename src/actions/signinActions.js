import axios from 'axios';

export function userSigninRequest(userData){
    return dispatch => {
        return axios.post('http://localhost:3000/users', userData);
    }
}

