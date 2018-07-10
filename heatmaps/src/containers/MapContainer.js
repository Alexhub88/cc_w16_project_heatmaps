import React from 'react'
import SettingsForm from '../components/SettingsForm.js'
var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
// import cities from 'cities.json';

class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.createContainer = this.createContainer.bind(this);
    this.mapSetUp = this.mapSetUp.bind(this);
    this.render = this.render.bind(this);

  }

  handleButtonClick() {
    const newSettingsForm = new SettingsForm();
    newSettingsForm.render();
  }

  createContainer() {
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML = '';
    const map = document.createElement('div');
    map.id = 'map'
    bodyElement.appendChild(map);
    const temp = document.createElement('div');
    temp.id = 'temp'
    bodyElement.appendChild(temp);
    const button = document.createElement('button');
    button.id = 'return-button'
    button.textContent = 'Return to Entry Screen'
    bodyElement.appendChild(button);
    button.addEventListener('click', this.handleButtonClick);
  }

  mapSetUp(latitude,longitude){

    GoogleMapsLoader.load(function(google) {
       const mapOptions = {
          zoom: 4,
          mapTypeControl: true,
          mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeIds: ['roadmap', 'terrain']
       }};

       const map = new google.maps.Map(document.getElementById('map'), mapOptions);
       map.setCenter({lat: parseFloat(latitude), lng: parseFloat(longitude)});

       const temp = new google.maps.Map(document.getElementById('temp'), mapOptions);
       temp.setCenter({lat: parseFloat(latitude), lng: parseFloat(longitude)});

       var trafficLayer = new google.maps.TrafficLayer();
       trafficLayer.setMap(null);
       trafficLayer.setMap(map);
    });

  }

    render () {
      return (
        <div className = "map-tile">
          <div id="map" ></div>
          <div id="temp" ></div>
        </div>

    )}

}

export default MapContainer
