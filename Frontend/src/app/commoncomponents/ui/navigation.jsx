import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>SHOPPING CART</h1>
      <ul>
        <li>
          <Link to="/trader">Item List</Link>
        </li>
        <li>
          <Link to="/customer">Login Profile</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/customerview">Customer List</Link>
        </li>
        <li>
          <Link to="/promotion">Promotions</Link>
        </li>
        <li>
          <Link to="/addpromotion">Add Promotions</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
