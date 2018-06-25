import React from 'react'
// import cities from 'cities.json';

class MapContainer extends React.Component {
  constructor(props){
    super(props);

     this.createContainer = this.createContainer.bind(this)
     this.createContainer()
     this.mapSetUp = this.mapSetUp.bind(this)
     this.mapSetUp()
     this.render = this.render.bind(this)
     this.render()

  }

  createContainer() {
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML = '';
    const map = document.createElement('div');
    map.id = 'map'
    bodyElement.appendChild(map);
    const button = document.createElement('button');
    bodyElement.appendChild(button);
  }

  mapSetUp(){
    var GoogleMapsLoader = require('google-maps'); // only for common js environments
    GoogleMapsLoader.KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
    GoogleMapsLoader.load(function(google) {
        new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: -33, lng: 151},
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'terrain']
          }
        });
    });
  }
    render () {
      return (
        <div id="map" ></div>
        // <div>
        //   <Map
        //     google={this.state.data}/>
        // </div>
    )}

}

export default MapContainer
