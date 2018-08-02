import React from 'react';

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
    this.props.onParamSubmit({layer: layer, latitude: latitude, longitude: longitude});
  }

  render() {
     return (
       <div>
         <h2>Enter HeatMap Layer Required, Latitude and Longitude:</h2>
       <form id="settingsForm" onSubmit={this.handleSubmit}>
         <label id="heatMapLayer">HeatMap Layer:</label>
          <select
               id="heatMapLayer"
               name="heatMapLayer"
               type="text"
               placeholder="HeatMap Layer Required">
               <option value="earthquake">Earthquake</option>
               <option value="temperature">Temperature</option>
               <option value="transport">Transport</option>
               <option value="transit">Transit</option>
             <option value="cycle">Cycle</option>
           </select>
       <label id="lat-coord">Latitude:</label>
         <input
           id="lat-coord"
           type="number"
           placeholder="Latitude"
           value={this.state.latitude}
           onChange={this.enterLatitude}
         />
       <label id="lng-coord">Longitude:</label>
         <input
           id="lng-coord"
           type="number"
           placeholder="Longitude"
           value={this.state.longitude}
           onChange={this.enterLongitude}
         />
            <div>
              <label></label>
              <input type="submit" id ="input-button" value="Enter Coordinates" />
            </div>
        <br></br>
        </form>
       </div>
     )
   }
}

export default SettingsForm;
