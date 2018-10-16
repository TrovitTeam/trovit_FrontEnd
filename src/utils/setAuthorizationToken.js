import axios from "axios"

export default function setAuthorizationToken(token)
{
    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        /*headers: {
          'Authorization': `Bearer ${token}`
        }*/
    });

    if(token)
    {
        axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';
    }
    else
    {
        delete axios.defaults.headers.common["Authorization"];
    }
}