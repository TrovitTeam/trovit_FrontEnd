import axios from 'axios';

export function productCreateRequest(productData){
    return (dispatch, getState)  => {

        const {user} = getState().auth;
        let id = 0;

        axios({
            method: 'GET',
            url: 'http://localhost:3000/users/' + user.id + '/user_type',
            responseType: 'json',
        }).then(response => {
            id = response.data["0"].id;
            return axios({
                method:'POST',
                url:'http://localhost:3000/distributors/'+id+'/products',
                responseType: "json",
                data: {
                    "quantity": productData.quantity,
                    "price": productData.price,
                    "producType": productData.producType,
                    "brand": productData.brand,
                    "productName": productData.productName,
                    "description": productData.description
                }
            })
            .then(function(response) {
                console.log('Product response');
                console.log(response);
            })
            .catch(function (error) {
                console.log('Product response error');
                console.log(error);
            });
        });
        
    }
    
}