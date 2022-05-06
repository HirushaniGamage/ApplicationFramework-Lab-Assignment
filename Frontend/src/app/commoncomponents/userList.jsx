import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userAction from "../../actions/user.action";

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const getUserDetails = useCallback(() => {
    userAction.getUserDetails().then((response) => {
      setUsers(response.data);
    });
  }, []);

  const userprofilecreate = () => {
    navigate("/customer" + location.search);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> NAME</th>
            <th></th>
            <th> EMAIL </th>
            <th></th>
            <th> MOBILE-NO</th>
            <th></th>
            <th> ROLE </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td></td>
              <td>{user.email}</td>
              <td></td>
              <td>{user.mobileNumber}</td>
              <td></td>
              <td>{user.role}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <button onClick={userprofilecreate}> Create New Profile </button>
    </div>
  );
};

export default UserListComponent;
