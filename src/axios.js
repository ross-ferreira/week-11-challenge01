// import the axios library
import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
baseURL: "http://rferreira3.restful.training/api/ping-pong", params: {
key: "67048e1a472eb55552727576cdbfe7b55a1ed4c0", },
    headers: {
        Accept: "application/json",
}, });

