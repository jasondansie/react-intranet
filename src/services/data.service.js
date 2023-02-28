
import axios from "axios";
import authHeader from "./auth-header";

const baseUrl = "http://localhost:5000/";

class UserService {
    getAllUsers() {
        return axios.get(baseUrl + 'all');
    }

    getSingleUser() {
        return axios.get(baseUrl + 'user', {headers: authHeader()});
    }
}

let userService = new UserService();

export default userService;