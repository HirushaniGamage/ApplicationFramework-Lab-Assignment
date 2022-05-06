import axios from "axios";

const actionUrl = "http://localhost:4000/";

class PromotionAction {
  getAllPromotion() {
    return axios.get(`${actionUrl}promotion`);
  }

  savePromotion(promotionDetails) {
    return axios.post(`${actionUrl}promotion`, promotionDetails);
  }
}

export default new PromotionAction();
