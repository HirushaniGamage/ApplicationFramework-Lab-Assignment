import React, { useCallback, useEffect, useState } from "react";
import PromotionAction from "../../actions/promotion.action";
import { useLocation, useNavigate } from "react-router-dom";

const PromotionListComponent = () => {
  const [promotions, setPromotions] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getAllPromotion();
  }, [getAllPromotion]);

  const getAllPromotion = useCallback(() => {
    PromotionAction.getAllPromotion().then((response) => {
      setPromotions(response.data);
    });
  }, []);

  const Promotionsavehandle = () => {
    navigate("/addpromotion" + location.search);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th></th>
            <th> Discount</th>
            <th></th>
            <th> Description </th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promotion, key) => (
            <tr key={key}>
              <td>{promotion.name}</td>
              <td></td>
              <td>{promotion.discount}</td>
              <td></td>
              <td>{promotion.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <button onClick={Promotionsavehandle}> Add Promotion </button>
    </div>
  );
};

export default PromotionListComponent;
