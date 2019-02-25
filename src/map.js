import React from "react";
import { render } from "react-dom";
import Map from "./Mapp";
import axios from "axios";

import Loader from "./Spinner";

export default class App extends React.Component {
  state = {
    hospital: []
  };

  componentDidMount() {
    axios
      .get(`https://find-hospital.herokuapp.com/api/hospitals/cordinate`)
      .then(res => {
        this.setState({
          hospital: res.data
        });
      });
  }

  render() {
    const { markerPosition } = this.state;
    if (this.state.hospital.length > 1) {
      return (
        <div>
          <Map
            markerPosition={{ lat: 49.8419, lng: 24.0315 }}
            hospitals={this.state.hospital}
          />
        </div>
      );
    }

    return <Loader />;
  }
}
