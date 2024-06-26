import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

const AuthService = {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  },
  logout() {
    localStorage.removeItem("user");
  },
  // use return and axios.post(url,the obeject contains 5 input value)
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;
