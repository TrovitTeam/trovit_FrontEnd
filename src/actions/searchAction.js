import Axios from "axios";
import { baseUrl } from '../resources/url';
import unsplash from '../apis/unsplash';

export const fetchSearchResults = (term) => {
    const response = await unsplash.get('/search/photos',{
        params: {query: term}
    });

    dispatchEvent({
        type:'FETCH_SEARCH_RESULTS',
        paylod: response
    })
}