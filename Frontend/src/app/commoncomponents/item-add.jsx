import React, { Component, useState } from "react";
import itemActions from "../../actions/item.actions";
import { useLocation, useNavigate } from "react-router-dom";

const ItemAddComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const itemdetail = {
      name,
      price,
    };

    itemActions.saveItem(itemdetail).then((response) => {
      if (response.status == 201) {
        alert("Data Successfully Saved");
        navigate("/trader" + location.search);
        resetForm();
      } else {
        alert("Error occured!!! Please Try Again");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <h2>Add New Items</h2>
      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <br></br>

        <label>Price</label>
        <br></br>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>

        <button type="submit"> Save</button>
      </form>
    </div>
  );
};

export default ItemAddComponent;
