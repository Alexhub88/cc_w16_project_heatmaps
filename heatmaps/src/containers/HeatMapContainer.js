import React from 'react'
import SettingsForm from '../components/SettingsForm.js'
import MapContainer from '../containers/MapContainer.js'

class HeatMapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
      layer: '',
      latitude: 0.0,
      longitude: 0.0}
    };
    this.handleHeatMapSelected = this.handleHeatMapSelected.bind(this)
  }

  handleHeatMapSelected() {

    this.setState({data: spec}, () => {
      const mapContainer = new MapContainer();
      mapContainer.createContainer();
      var latitude = this.state.data.latitude;
      var longitude = this.state.data.longitude;
      mapContainer.mapSetUp(latitude, longitude);
      mapContainer.render()});
  }

  render() {
    return (
      <div className="settings">
        <SettingsForm
          onSettingsSubmit={this.handleHeatMapSelected}
        />
      </div>

  )}
}

export default HeatMapContainer
