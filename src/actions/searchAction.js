import Axios from "axios";
import { baseUrl } from '../resources/url';
import unsplash from '../apis/unsplash';

export const fetchSearchResults = (term) => async (dispatch) => {
    const response = await unsplash.get('/search/photos',{
        params: {query: term}
    });

    dispatch({
        type:'FETCH_SEARCH_RESULTS',
        paylod: response
    })
}