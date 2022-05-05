import React from "react";
import { Routes, Route } from "react-router-dom";
import Customer from "./app/commoncomponents/customer";
import Trader from "./app/commoncomponents/trader";
import NavigationBar from "./app/commoncomponents/ui/navigation";

const App = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/trader" element={<Trader></Trader>}></Route>
          <Route path="/customer" element={<Customer></Customer>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
