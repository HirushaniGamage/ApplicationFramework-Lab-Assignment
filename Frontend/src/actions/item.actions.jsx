import axios from "axios";

const actionUrl = "http://localhost:4000/";

class ItemAction {
  getAllItem() {
    return axios.get(`${actionUrl}item`);
  }

  saveItem(itemDetails) {
    return axios.post(`${actionUrl}item`, itemDetails);
  }

  updateItem(itemDetails) {
    return axios.put(`${actionUrl}item`, itemDetails);
  }

  getItemById(id) {
    return axios.get(`${actionUrl}item/${id}`);
  }
}

export default new ItemAction();
