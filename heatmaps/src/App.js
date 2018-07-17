import React, { Component } from 'react';
import GoogleMapReactComponent from './components/GoogleMapReactComponent.js';
import SettingsForm from './components/SettingsForm.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { layer: '', latitude: 0.0, longitude: 0.0};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(mapParameters) {
    this.setState({layer: mapParameters['layer'],latitude: parseFloat(mapParameters['latitude']), longitude: parseFloat(mapParameters['longitude'])}, () => {
   });
  }

  render() {
    return (
      <div>
      <div className="settingsForm">
        <SettingsForm onParamSubmit={this.handleFormSubmit}/>
      </div>
      <div className="maps">
        <div className="mapContainer"><GoogleMapReactComponent parameters={this.state}/></div>
        <div className="mapContainer"><GoogleMapReactComponent parameters={this.state}/></div>
        <div className="mapContainer"><GoogleMapReactComponent parameters={this.state}/></div>
      </div>
    </div>);
  }
}

export default App;
