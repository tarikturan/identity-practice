import React from "react";
import "./App.css";
import "./sidebar.css";
import { Route, Switch } from "react-router-dom";
import Panel from "./views/Panel";
import Login from "./views/Login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/panel" component={Panel} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
