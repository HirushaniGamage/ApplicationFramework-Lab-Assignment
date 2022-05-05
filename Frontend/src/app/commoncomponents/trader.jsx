import React, {
  Component,
  useCallback,
  useEffect,
  useState,
  setState,
} from "react";
import itemActions from "../../actions/item.actions";

const Trader = () => {
  const [items, setItems] = useState([]);
  const viewAllItems = useCallback(() => {
    itemActions.viewAllItems().then((response) => {
      setItems(response.data);
      console.log(items);
    });
  }, []);

  useEffect(() => {
    viewAllItems();
  }, [viewAllItems]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> ItemName </th>
            <th> Price </th>
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
    </div>
  );
};

export default Trader;
