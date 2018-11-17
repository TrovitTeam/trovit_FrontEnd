import axios from 'axios';

export function companySigninRequest(companyData){
    
    return dispatch => {
        console.log(companyData.name);
        return axios({
            method:'POST',
            url:'https://trovit.herokuapp.com/companies',
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


