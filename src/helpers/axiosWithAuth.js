import axios from "axios";

export const axiousWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            authorization: token,
        }
    })
}
//Task List:
//Build and export a function used to send in our authorization token