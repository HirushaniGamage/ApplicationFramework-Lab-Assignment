import React from "react";
import { Routes, Route } from "react-router-dom";
import UserListComponent from "./app/commoncomponents/userList";
import ItemListComponent from "./app/commoncomponents/itemList";
import NavigationBar from "./app/commoncomponents/ui/navigation";
import ItemAddComponent from "./app/commoncomponents/item-add";
import ItemUpdateComponent from "./app/commoncomponents/itemUpdate";
import UserAddComponent from "./app/commoncomponents/user.add";
import PromotionAddComponent from "./app/commoncomponents/promotion.add";
import PromotionListComponent from "./app/commoncomponents/promotion.list";
import CustomerShoppingCartComponent from "./app/commoncomponents/customer.shoppingcart.list";

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path="/"></Route>
          <Route
            path="/trader"
            element={<ItemListComponent></ItemListComponent>}
          ></Route>
          <Route
            path="/trader/itemDetails"
            element={<ItemAddComponent></ItemAddComponent>}
          ></Route>
          <Route
            path="/trader/itemUpdate"
            element={<ItemUpdateComponent></ItemUpdateComponent>}
          ></Route>
          <Route
            path="/customer"
            element={<UserAddComponent></UserAddComponent>}
          ></Route>
          <Route
            path="/customerview"
            element={<UserListComponent></UserListComponent>}
          ></Route>
          <Route
            path="/addpromotion"
            element={<PromotionAddComponent></PromotionAddComponent>}
          ></Route>
          <Route
            path="/promotion"
            element={<PromotionListComponent></PromotionListComponent>}
          ></Route>
          <Route
            path="/cart"
            element={
              <CustomerShoppingCartComponent></CustomerShoppingCartComponent>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
