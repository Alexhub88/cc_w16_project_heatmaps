import React from 'react'
import SettingsForm from '../components/SettingsForm.js'

class HeatMapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, layer: '', latitude: 0.0, longitude: 0.0}]
    }
    // console.log(this.state.mapSpecs.layer);
     this.handleHeatMapSelected = this.handleHeatMapSelected.bind(this)
  }

  handleHeatMapSelected(spec) {
    spec.id = Date.now();
    console.log(spec);
    this.setState({data: spec}, function () {
    console.log(this.state.data);
    });
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
