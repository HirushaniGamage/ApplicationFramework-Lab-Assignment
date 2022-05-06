import axios from "axios";

const actionUrl = "http://localhost:4000/";

class OrderAction {
  placeOrder(orderDetails) {
    return axios.put(`${actionUrl}order`, orderDetails);
  }
}

export default new OrderAction();
