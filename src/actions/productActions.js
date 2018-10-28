import axios from 'axios';

export function productCreateRequest(productData){
    return dispatch => {
        console.log("ProductName");
        console.log(productData.productName);
        console.log("ProductType");
        console.log(productData.producType);
        console.log("price");
        console.log(productData.price);
        console.log("brand");
        console.log(productData.brand);
        console.log("descr");
        console.log(productData.description);
        console.log("Quantity");
        console.log(productData.quantity);
        return axios({
                    method:'POST',
                    url:'http://localhost:3000/distributors/10/products',
                    responseType: "json",
                    data: {
                        "productName": productData.productName,
                        "price": productData.price,
                        "producType": productData.producType,
                        "brand": productData.brand,
                        "quantity": productData.quantity,
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