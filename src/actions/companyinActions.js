import axios from 'axios';
import {baseUrl} from "../resources/url.js";

export function companySigninRequest(companyData){
    
    return dispatch => {
        console.log(companyData.name);
        return axios({
            method:'POST',
            url: baseUrl + 'companies/',
            responseType: "json",
            data: {
                "name": companyData.name,
                "location": companyData.location,
                "companyType": companyData.companyType
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


