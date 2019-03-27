import React, { Component } from "react";
import { render } from "react-dom";
import Control from "react-leaflet-control";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  CircleMarker,
  ScaleControl
} from "react-leaflet";
import L from "leaflet";

import Dialog from "./Dialog.js";
import Loader from "./Spinner";
import { Link } from "react-router-dom";

const IconUrl = [
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/IGMZ-hospitalfinal.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/juAs-dentalfinal.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/YMvA-046-microscope.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/e7pw-clinicfinals.png"
  }),

  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/XYD3-eyefinal.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/1F80-homopathic.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/TNbI-AurFinal.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/084-stretcher.png"
  }),

  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/aGvI-vetenaryFinal.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/S4tS-chc.png"
  }),

  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/pgip-chc.png"
  })
];

const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error("Not Supported"));
    }

    geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error("Permission denied"));
      }
    );
  });
  return location;
};

export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
    navigator.geolocation.getCurrentPosition(position => {
      const location = JSON.stringify(position);
      this.setState({ location });
    });
  }
  state = {
    location: 4
  };

  componentDidMount() {
    const hospitals = this.props.hospitals
      .filter(hospital => hospital.Location_Coordinates.length == 2)
      .filter(hospital => hospital.Hospital_Care_Type.length > 2);
    this.setState({
      markers: hospitals
    });
  }

  render() {
    if (this.state.markers.length > 1) {
      console.log(this.state);
      return (
        <Map
          style={{ height: `${window.innerHeight}px`, flex: 1 }}
          center={[20.2961, 85.8245]}
          zoom={12}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {this.state.markers.map((position, idx) => {
            if (position.Hospital_Care_Type == "hospital")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[0]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "dentalcare")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[1]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "testlab")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[2]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "clinic")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[3]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "eyecare")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[4]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "ayurvedic")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[5]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "homopatic")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[6]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "nursinghome")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[7]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "veterinary")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[8]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "communityhealthcentre")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[9]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                  </Popup>
                </Marker>
              );
            if (position.Hospital_Care_Type == "childcare")
              return (
                <Marker
                  key={`marker-${idx}`}
                  icon={IconUrl[10]}
                  position={position.Location_Coordinates}
                  opacity={1}>
                  <Popup>
                    <Link
                      to={`/hospital/${this.state.markers[idx]._id}`}
                      style={{ textDecoration: "none" }}>
                      {position.Hospital_Name}
                    </Link>
                    />
                  </Popup>
                </Marker>
              );
          })}

          <CircleMarker radius={10} center={[20.2961, 85.8245]} />
        </Map>
      );
    }
    return <Loader />;
  }
}
