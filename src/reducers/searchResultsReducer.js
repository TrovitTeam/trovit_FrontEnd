export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_RESULTS":
      return action.payload;
    case "FETCH_PRODUCTS_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
