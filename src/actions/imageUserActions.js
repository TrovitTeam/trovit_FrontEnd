import axios from 'axios';


export function imageUserCreateRequest(pictureData){
    return dispatch => {
        return axios({
                    method:'POST',
                    url:'http://localhost:3000/users/1/pictures',
                    responseType: "json",
                    data: {
                        "image": pictureData.image,
                        "pictureType": "user",
                        "pictureUrl": "image_url"
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

export function imageUpload(fData){

    return (dispatch, getState) => {
        
        const {user} = getState().auth;


        let type = '';
        if(user.userType === 'distributor')
        {
            type = 'distributors';
        }
        else
        {
            type = 'business_managers';
        }

        let id = 0;
        
        axios({
            method: 'GET',
            url: 'http://localhost:3000/users/' + user.id + '/user_type',
            responseType: 'json',
        })
        .then(response => {
            console.log(response);
            id = response.data["0"].id;
            console.log("FData: ");
            console.log(fData);

            return  axios({
                method: 'POST',
                url: 'http://localhost:3000/'+ type +'/' + id + '/pictures',
                data: fData
            });
        });

        
    }
}