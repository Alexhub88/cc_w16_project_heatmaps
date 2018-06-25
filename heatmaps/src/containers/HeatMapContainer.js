import React from 'react'
import SettingsForm from '../components/SettingsForm.js'
import MapContainer from '../containers/MapContainer.js'

class HeatMapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, layer: '', latitude: 0.0, longitude: 0.0}]
    }

     this.handleHeatMapSelected = this.handleHeatMapSelected.bind(this)

  }

  handleHeatMapSelected(spec) {
    spec.id = Date.now();
    this.setState({data: spec})
    const mapContainer = new MapContainer();
    mapContainer.createContainer();
    mapContainer.mapSetUp();
    mapContainer.render();
  }

  render() {
    return (
      <div className="form">
        <SettingsForm
          onSettingsSubmit={this.handleHeatMapSelected}
        />
      </div>

  )}
}

export default HeatMapContainer
