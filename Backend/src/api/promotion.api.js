const { v4: uuidv4 } = require("uuid");
//const { use } = require("../routes/item.route");

var promotions = new Map();

/*
 *@Description addPromotion
 */

const savePromotion = ({ name, discount, description }) => {
  try {
    const promotion = {
      id: uuidv4(),
      name: name,
      discount: discount,
      description: description,
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    promotions.set(promotion.id, promotion);
  } catch (error) {
    console.error(error);
  }
};

/*
 *@Description viewInventory
 */

const getAllPromotion = () => {
  return [...promotions.values()];
};

module.exports = {
  savePromotion,
  getAllPromotion,
};
