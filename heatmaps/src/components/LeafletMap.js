import React, { Component } from 'react';
import  {markers} from './utils.js';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import './leaflet.css';

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    console.log(this.props.parameters);
  }

  componentDidUpdate() {
    console.log(this.props.parameters);
  }

  render() {
    const updatedProps = {
          center: {
            lat: this.props.parameters.latitude,
            lng: this.props.parameters.longitude
          },
          zoom: 12
    };

    const LeafletMarkers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.name}</span>
        </Popup>
      </Marker>
    ));

    return (

        <Map center={updatedProps.center} zoom={updatedProps.zoom} >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {LeafletMarkers}
        </Map>

    );
  }
}

export default LeafletMap;
