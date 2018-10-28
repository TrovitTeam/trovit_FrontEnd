import axios from 'axios';

export function productCreateRequest(productData){
    return dispatch => {
        return axios({
                    method:'POST',
                    url:'http://localhost:3000/distributors/10/products',
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
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    
}