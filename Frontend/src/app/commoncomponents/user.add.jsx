import React, { Component, useState } from "react";
import userAction from "../../actions/user.action";

const UserAddComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const userDetails = {
      name,
      email,
      mobileNumber,
      password,
      role,
    };

    userAction.saveUser(userDetails).then((response) => {
      if (response.status == 201) {
        alert("Profile Created Successfully!!!");
        resetForm();
      } else {
        alert("Error Occured!!! Please Try Again");
      }
    });
  };

  const onRoleSelect = (e) => {
    let roleType = e.target.value;
    console.log(roleType);
    if (roleType === "1") {
      setRole(1);
    } else if (roleType === "2") {
      setRole(2);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMobileNumber("");
    setPassword("");
    setRole(0);
  };
  return (
    <div>
      <h3>Register to the Profile</h3>

      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Email</label>
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label>Mobile Number</label>
        <br></br>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        ></input>
        <br></br>

        <label>Password</label>
        <br></br>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <br></br>

        <div onChange={onRoleSelect}>
          Customer
          <input type="radio" value="1" name="customer" />
          Trader
          <input type="radio" value="2" name="trader" />
        </div>

        <button type="submit"> Register </button>
      </form>
    </div>
  );
};

export default UserAddComponent;
