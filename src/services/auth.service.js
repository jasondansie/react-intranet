import axios from "axios";

const baseUrl = "http://localhost:5000/";

class AuthService {
    login(username, password){
        return axios
        .post(baseUrl, {username, password})
        .then((resopnse) => {
            if (resopnse.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(resopnse.data));
            }
        });
    }

    logout(){
        localStorage.removeItem("user");
    }
}

export default new AuthService();

