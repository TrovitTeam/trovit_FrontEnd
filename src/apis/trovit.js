import axios from "axios";

export default axios.create({
  baseURL: "https://trovit.herokuapp.com"
});

/* export default axios.create({
  baseURL: "http://localhost:3000/"
}); */
