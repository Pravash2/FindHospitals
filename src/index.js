import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import Form from './Editform'
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";


const routing = (
  <Router>
    <div>
      <Switch>
          <Route path="/edit/:id" component={Form} />
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
