import React, { Component, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import itemActions from "../../actions/item.actions";
import OrderAction from "../../actions/order.action";

const CustomerShoppingCartComponent = () => {
  /*const [items, setItems] = useState([]);
  const [, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getAllItem();
  }, [getAllItem]);

  const getAllItem = useCallback(() => {
    itemActions.getAllItem().then((response) => {
      setItems(response.data);
    });
  }, []);

  const Buynow = (orderObj, totalPrice) => {
    const orderDetails = {
      items: orderObj,
      totalPrice,
    };
    OrderAction.placeOrder(orderDetails).then((response) => {
      if (response.status == 200) {
        alert("Buy Now!!");
      }
    });
  };

  const addToCart = (item) => {
    setCartItems(item);
  };

  return (
    <div>
      {items.map((item, key) => (
        <div key={key}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>Sale</p>
          <p>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPrice}
        <button onClick={Buynow}>Buy Now</button>
      </div>
    </div>
  );
};*/
  const [items, setItems] = useState([]);
  let [, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getAllItem();
  }, [getAllItem]);

  const getAllItem = useCallback(() => {
    itemActions.getAllItem().then((response) => {
      setItems(response.data);
    });
  }, []);

  const haddlePurches = (orderObj, totalPrice) => {
    const orderDetails = {
      items: orderObj,
      totalPrice,
    };
    OrderAction.placeOrder(orderDetails).then((response) => {
      if (response.status == 200) {
        alert("Place Order successfully");
      }
    });
  };

  const addToCart = (item) => {
    setCartItems(item);
  };

  return (
    <div>
      {items.map((item, key) => (
        <div key={key}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>Sale</p>
          <p>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPrice}
        <button onClick={haddlePurches}>Buy Now</button>
      </div>
    </div>
  );
};

export default CustomerShoppingCartComponent;
