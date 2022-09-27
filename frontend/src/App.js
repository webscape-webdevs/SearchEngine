import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../src/containers/Home/Home";

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/" component={Home} />

      </Switch>

    </Router>
  );

}

export default App;
