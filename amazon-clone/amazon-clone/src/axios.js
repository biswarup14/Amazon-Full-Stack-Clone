
import axios from "axios";

const instance = axios.create({
    baseURL:"'http://us-central1-clo-b0a38.cloudfunctions.net/api'" 
});

export default instance;
