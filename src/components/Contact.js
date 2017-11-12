import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Animated } from "react-animated-css";

import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import '../styles/Contact.css';

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDUCfXC16d1tzr_-PG509mWZyxvUONHNLw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 10),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 18.5204, lng: 73.8567 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: 18.5204, lng: 73.8567 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          {" "}
          Pune, Maharashtra, Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
);

class Contact extends Component {
  render() {
    return (
      <div>
        <Animated animationIn="fadeInUp">
          <MapWithControlledZoom />
        </Animated>
        <div className="contactPageStyle">
          <div className="container">
            <div className="row">
              <Animated animationIn="fadeInDown">
                <div className="col m4">
                  <RaisedButton primary={true} label="See Github Profile" target="_blank" href="https://github.com/prathameshpm" style={{margin: 20}} />
                </div>
                <div className="col m4"></div>
                <div className="col m4">
                  <RaisedButton secondary={true} label="See LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/prathamesh-mahamulkar-66b24a63/" style={{margin: 20}} />
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
