import React from "react";
import { render } from "react-dom";
import Map from "./Mapp";
import axios from "axios";

import Loader from "./Spinner";

const style = {
  chip: {
    background: "linear-gradient(to right bottom, #430089, #82ffa1)"
  }
};

export default class App extends React.Component {
  state = {
    hospital: []
  };

  componentDidMount() {
    axios
      .get(
        `https://find-hospital.herokuapp.com/api/hospitals/filter/${
          !this.props.type ? this.props.match.params.type : ""
        }`
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          hospital: res.data
        });
      });
  }

  render() {
    const { markerPosition } = this.state;
    console.log(this.state.hospital);
    if (this.state.hospital.length > 1) {
      return (
        <div>
          <Map
            markerPosition={{ lat: 49.8419, lng: 24.0315 }}
            hospitals={this.state.hospital}
            type={this.props.type ? 12 : 11}
            opacity={0.8}
          />
        </div>
      );
    }

    return <Loader />;
  }
}
