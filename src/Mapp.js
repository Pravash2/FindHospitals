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


const app = [
  "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/5e6p-045-hospital.pn"
];

const IconUrl = [
  L.icon({
    iconUrl:
      "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/KJLJ-045-hospital.png"
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

export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }
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
      return (
        <Map
          style={{ height: `${window.innerHeight}px`, flex: 1 }}
          center={[20.2961, 85.8245]}
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
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
                    <Dialog
                      positions={position}
                      hospitals={this.props.hospitals.filter(
                        hospital =>
                          hospital.Location_Coordinates ==
                          position.Location_Coordinates
                      )}
                    />
                  </Popup>
                </Marker>
              );
          })}

          <CircleMarker radius={20} center={[20.2961, 85.8245]} />
        </Map>
      );
    }
    return <Loader />;
  }
}
