import React, { Component } from 'react';
import HeatMapContainer from './containers/HeatMapContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeatMapContainer/>
      </div>
    );
  }
}

export default App;
