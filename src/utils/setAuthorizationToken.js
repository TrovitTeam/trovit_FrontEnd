import axios from "axios"
import {baseUrl} from "../resources/url.js";

export default function setAuthorizationToken(token)
{
    const instance = axios.create({
        baseURL:  baseUrl,
        /*headers: {
          'Authorization': `Bearer ${token}`
        }*/
    });

    if(token)
    {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else
    {
        delete axios.defaults.headers.common["Authorization"];
    }
}