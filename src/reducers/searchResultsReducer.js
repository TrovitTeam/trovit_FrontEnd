export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}