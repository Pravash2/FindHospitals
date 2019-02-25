import React from "react";
import Map from "./map";
import "./leaflet.css";
import SearchBar from "./searchBar";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Map />
      </div>
    );
  }
}
