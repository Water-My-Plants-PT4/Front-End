import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import UserHome from "./views/user-home/UserHome";
import PlantAdd from "./views/plant-add/PlantAdd";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile">
          <UserHome />
        </Route>
        <Route exact path="/create-plant">
          <PlantAdd />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
