import axios from "axios";

const actionUrl = "http://localhost:4000/";

class ItemAction {
  viewAllItems() {
    return axios.get(`${actionUrl}item`);
  }
}

export default new ItemAction();
