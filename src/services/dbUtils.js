import axios from "axios";

const baseUrl = "http://localhost:5000/";

const getSingleUser = async (endpoint) => {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    return response.data;
}

export default getSingleUser();