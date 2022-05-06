import React, { Component, useState, useEffect } from "react";
import itemActions from "../../actions/item.actions";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ItemUpdateComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  useEffect(() => {
    console.log(params.id);
    itemActions.getItemById(params.id).then((response) => {
      setName(response.data.name);
      setPrice(response.data.price);
    });
    onSubmitForm.bind(this);
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const itemDetails = {
      id: params.id,
      name,
      price,
    };

    itemActions.updateItem(itemDetails).then((response) => {
      if (response.status == 201) {
        alert("Data Successfully Updated");
        navigate("/trader" + location.search);
      } else {
        alert("Error occured!!! Please Try Again");
      }
    });
  };

  return (
    <div>
      <h2>Update Item</h2>
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
        <br></br>
        <button type="submit"> Update Item</button>
      </form>
    </div>
  );
};

export default ItemUpdateComponent;
