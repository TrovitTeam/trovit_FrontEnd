import axios from 'axios';

export function companySigninRequest(companyData){
    return dispatch => {
        console.log(companyData.name);
        return axios({
            method:'POST',
            url:'http://localhost:3000/companies',
            responseType: "json",
            data: {
                "company":
                {
                "name": companyData.name,
                "location": companyData.location,
                "companyType": companyData.companyType
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

