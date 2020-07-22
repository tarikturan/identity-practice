import React from "react";
import "./App.css";
import "./sidebar.css";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./views/Dashboard";

import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
