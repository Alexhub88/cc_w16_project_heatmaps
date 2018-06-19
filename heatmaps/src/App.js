import React, { Component } from 'react';
import HeatMapContainer from './containers/HeatMapContainer.js'
import MapContainer from './containers/MapContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MapContainer/>
      </div>
    );
  }
}

export default App;
