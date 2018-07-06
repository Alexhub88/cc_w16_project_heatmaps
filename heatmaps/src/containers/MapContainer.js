import React from 'react'
import SettingsForm from '../components/SettingsForm.js'
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
    const button = document.createElement('button');
    button.id = 'return-button'
    button.textContent = 'Return to Entry Screen'
    bodyElement.appendChild(button);
    button.addEventListener('click', this.handleButtonClick);
  }

  mapSetUp(latitude,longitude){

    var GoogleMapsLoader = require('google-maps');
    GoogleMapsLoader.KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
    GoogleMapsLoader.load(function(google) {
       const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
          }
        });
        map.setCenter({lat: parseFloat(latitude), lng: parseFloat(longitude)});
    });
  }

    render () {
      return (
        <div className = "map-tile">
          <div id="map" ></div>
        </div>
    )}

}

export default MapContainer
