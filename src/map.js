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
        `https://find-hospital.herokuapp.com/api/hospitals/cordinate/${
          !this.props.type ? this.props.match.params.type : ""
        }`
      )
      .then(res => {
        this.setState({
          hospital: res.data
        });
      });
  }

  render() {
    const { markerPosition } = this.state;
    if (this.state.hospital.length > 1) {
      console.log(this.state.hospital,this.props.hospital)
      return (
        <div>
          <Map
            markerPosition={{ lat: 49.8419, lng: 24.0315 }}
            hospitals={
              this.props.hospital ? this.props.hospital : this.state.hospital
            }
            type={this.props.type ? 12 : 11}
            opacity={0.8}
          />
        </div>
      );
    }

    return <Loader />;
  }
}
