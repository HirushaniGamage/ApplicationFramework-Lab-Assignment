const { v4: uuidv4 } = require("uuid");

var orders = new Map();

/*
 *@Description addPromotion
 */

const placeOrder = (orderObj) => {
  console.log(orderObj);

  try {
    const order = {
      id: uuidv4(),

      totalPrice: orderObj.totalPrice,

      orderItems: [],

      createdOn: new Date(),

      updatedOn: new Date(),
    };

    orderObj.orderItems.forEach((x) => {
      order.orderItems.push(x);
    });

    console.log("======================");

    console.log(order.orderItems);

    orders.set(order.id, order);

    console.log(order);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  placeOrder,
};
