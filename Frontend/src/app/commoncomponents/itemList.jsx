import React, { Component, useCallback, useEffect, useState } from "react";
import itemActions from "../../actions/item.actions";
import { useLocation, useNavigate } from "react-router-dom";

const ItemListComponent = () => {
  const [items, setItems] = useState([]);

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

  const Itemsavehandle = () => {
    navigate("./itemDetails" + location.search);
  };
  const Itemupdatehandle = () => {
    navigate("./itemUpdate" + location.search);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Item </th>
            <th></th>
            <th> Price </th>
            <th></th>
            <th> Update </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td></td>
              <td>{item.price}</td>
              <td></td>
              <td>
                <button onClick={Itemupdatehandle}> Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <button onClick={Itemsavehandle}> Add New Item</button>
    </div>
  );
};

export default ItemListComponent;
