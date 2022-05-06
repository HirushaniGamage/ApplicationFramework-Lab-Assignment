import axios from "axios";

const actionUrl = "http://localhost:4000/";

class UserAction {
  getUserDetails() {
    return axios.get(`${actionUrl}user`);
  }

  saveUser(userDetails) {
    return axios.post(`${actionUrl}user`, userDetails);
  }
}

export default new UserAction();
