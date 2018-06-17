import React from 'react';
import SettingsForm from '../components/SettingsForm.js'

class HeatMapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mapSpecs:
        {layer: 'transit', latitude: 0.0, longitude: 0.0}
        // {layer: layer2, latitude: lat2, longitude: long2},
        // {layer: layer3, latitude: lat3, longitude: long3},
        // {layer: layer4, latitude: lat4, longitude: long4}
    }
    // console.log(this.state.mapSpecs.layer);
     this.handleHeatMapSelected = this.handleHeatMapSelected.bind(this)
  }

  handleHeatMapSelected() {
    var newMapSpecs = this.state.mapSpecs
    this.setState({mapSpecs: newMapSpecs});
  }

  render() {
    return (
      <div>
        <SettingsForm
          specs={this.state.mapSpecs}
          onSettingsSubmit={this.handleHeatMapSelected}
        />
      </div>
  )}
}

export default HeatMapContainer
