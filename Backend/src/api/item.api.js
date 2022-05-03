const { v4: uuidv4 } = require("uuid");

var items = new Map();

/*
 *@Description addItem
 */

const saveItem = ({ name, price }) => {
  try {
    const item = {
      id: uuidv4(),
      name: name,
      price: price,
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    items.set(item.id, item);
  } catch (error) {
    console.error(error);
  }
};

/*
 *@Description editItem
 */

const updateItem = ({ id, name, price }) => {
  try {
    let itemDetails = items.get(id);
    if (itemDetails != null) {
      const item = {
        name: name,
        price: price,
        updatedOn: new Date(),
      };

      items.set(itemDetails.id, item);
      ctx.body = "Success";
    } else {
      ctx.body = "Data Not Found";
    }

    items.set(item.id, item);
  } catch (error) {
    console.error(error);
  }
};

/*
 *@Description viewInventory
 */

const getAllItem = () => {
  return [...items.values()];
};

module.exports = {
  saveItem,
  updateItem,
  getAllItem,
};
