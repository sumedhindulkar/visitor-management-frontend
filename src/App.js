import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import BuildingVisitors from "./views/BuildingVisitors";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/building/:id/visitors"
          component={BuildingVisitors}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
