import React from 'react';
import MapContainer from '../containers/MapContainer.js'

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.enterLayer = this.enterLayer.bind(this);
    this.enterLatitude = this.enterLatitude.bind(this);
    this.enterLongitude  = this.enterLongitude.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      layer: 'earthquake',
      latitude: 57.4,
      longitude: 98.5,

    };
  }

 enterLayer(event) {
   this.setState({layer: event.target.value});
 }

  enterLatitude(event) {
    this.setState({latitude: event.target.value});
  }

  enterLongitude(event) {
    this.setState({longitude: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var layer = this.state.layer.trim();
    var latitude = this.state.latitude;
    var longitude = this.state.longitude;
    if (!layer || !latitude || !longitude) {
      return;
    }

    const mapContainer = new MapContainer();
    mapContainer.createContainer();
    mapContainer.mapSetUp(latitude,longitude);
    mapContainer.render();

  }

  render() {
     return (
       <form className="settingsForm" onSubmit={this.handleSubmit}>
         <input
           type="text"
           placeholder="HeatMap Layer Required"
           value={this.state.layer}
           onChange={this.enterLayer}
         />
         <input
           type="number"
           placeholder="Latitude"
           value={this.state.latitude}
           onChange={this.enterLatitude}
         />
         <input
           type="number"
           placeholder="Longitude"
           value={this.state.longitude}
           onChange={this.enterLongitude}
         />
         <input type="submit" value="Post" />
       </form>
     )
   }
}

export default SettingsForm;
