import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  render() {
    const markers = this.props.markers || [];

    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 4.6807975, lng: -74.127893 }}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
        ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
