import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Se</h1>
      <ul>
        <li>
          <Link to="/trader">Trader</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
