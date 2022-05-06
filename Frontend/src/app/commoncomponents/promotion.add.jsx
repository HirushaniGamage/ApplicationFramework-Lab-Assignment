import React, { Component, useState } from "react";
import PromotionAction from "../../actions/promotion.action";
import { useLocation, useNavigate } from "react-router-dom";

const PromotionAddComponent = () => {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  let location = useLocation();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const promotionDetails = {
      name,
      discount,
      description,
    };

    PromotionAction.savePromotion(promotionDetails).then((response) => {
      if (response.status == 201) {
        alert("Promotion Added Successfully!!!");
        navigate("/promotion" + location.search);
        resetForm();
      } else {
        alert("Error Occured!!! Please Try Again");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setDiscount("");
    setDescription("");
  };

  return (
    <div>
      <h3>Add Promotion</h3>

      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Discount</label>
        <br></br>
        <input
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        ></input>
        <br></br>

        <label>Description</label>
        <br></br>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br></br>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default PromotionAddComponent;
