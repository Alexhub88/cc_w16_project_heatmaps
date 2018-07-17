import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CONFIG from './config.json';
// import  {markers, mapConfig } from './utils.js'
import styles from '../styles.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    const updatedProps = {
          center: {
            lat: this.props.parameters.latitude,
            lng: this.props.parameters.longitude
          },
          zoom: 12
    };
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: CONFIG.GOOGLE_MAPS_API_KEY, language: 'en'}}
          center={updatedProps.center}
          zoom={updatedProps.zoom}
          layerTypes={['TrafficLayer', 'TransitLayer']}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>

    );
  }
}

export default SimpleMap;
