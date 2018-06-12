import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{lat: 51.118, lng: 17.082 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 51.118140, lng: 17.083860 }} />}
  </GoogleMap>
))

export const Map = () => (
    <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
);