import React from "react";
import PizzaForm from "./components/form";
import HomePage from "./components/homepage";
import { Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
const App = () => {
  return (
    <div>

      <NavBar />

      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={PizzaForm} />

    </div>
  );
};
export default App;
