import axios from 'axios';

export function imageUserCreateRequest(pictureData){
    return dispatch => {
        return axios({
                    method:'POST',
                    url:'http://localhost:3000/users/1/pictures',
                    responseType: "json",
                    data: {
                        "image": pictureData.image,
                        "pictureType": pictureData.pictureType,
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