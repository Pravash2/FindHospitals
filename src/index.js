import React from "react";
import ReactDOM from "react-dom";
import Map from "./map";
import Map2 from "./map";
import SearchBar from "./searchBar";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./styles.css";
import "./leaflet.css";
import List from "./List";
import HospitalPage from "./Hospitalpage.js";
import Map4 from "./Map4";
import Map5 from "./Map5";
import List3 from "./List3";

import Diagnosis from "./Diagnosis/Diagnosis";
import FirstPage from "./FirstPage";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Map2 type="true" />
    </div>
  );
}

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/main" component={App} />
        <Route path="/disease/:id" component={List3} />
        <Route path="/emer" component={Map5} />
        <Route path="/diagnosis" component={Diagnosis} />
        <Route path="/search/:search" component={Map4} />
        <Route path="/filter/:type" component={List} />
        <Route path="/hospital/:id" component={HospitalPage} />
        <Route path="/:type" component={Map} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
