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
import axios from "axios";

const app = [
  "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/5e6p-045-hospital.pn"
];

const IconUrl = [
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/73a8acc68120e3aa59041b29f057471f96996e0d/src/public/icons/001-ambulance.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/095-tooth-1.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/051-flask.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/005-blood-1.png"
  }),

  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/034-eye-2.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/006-mortar.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/009-mortar-1.png"
  }),
  L.icon({
    iconUrl:
      "https://rawcdn.githack.com/Pravash2/Find_Hospital/36b21d16f06e0e2e991df0910eb19698973d0afd/src/public/icons/084-stretcher.png"
  }),

  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/UM3C-001-pharmacy.png"
  }),
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/S4tS-chc.png"
  }),

  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/RG1x-childhealthcare.png"
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
    let hospital = [];
    axios
      .get("https://find-hospital.herokuapp.com/api/hospitals/all")
      .then(
        res =>
          (this.setState({markers: res.data
            .filter(hospital => hospital.Location_Coordinates.length == 2)
            .filter(hospital => hospital.Hospital_Care_Type.length > 2)}))
      );
    
    
  }

  render() {
    if (this.state.markers.length > 1) {
      return (
        <Map
          style={{ height: `${window.innerHeight}px`, flex: 1 }}
          center={[17.597, 78.4863]}
          zoom={13}>
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
                    <p>
                      Call{" "}
                      <a href={`tel:${position.Ambulance_Phone_No}`}>{`${
                        position.Ambulance_Phone_No
                      }`}</a>
                    </p>
                  </Popup>
                </Marker>
              );
          })}

          <CircleMarker radius={10} center={[17.597, 78.4863]} />
        </Map>
      );
    }
    return <Loader />;
  }
}
