import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';
// import cities from 'cities.json';
import Map from '../components/Map.js'
// import GoogleApi from '../components/GoogleApi.js'


class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{id:1, layer: '', latitude: 0.0, longitude: 0.0}]
    }

     this.mapSetUp = this.mapSetUp.bind(this)
     this.mapSetUp()

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
        <div id="map" style={{width: 500, height: 500}}></div>
        // <div>
        //   <Map
        //     google={this.state.data}/>
        // </div>
    )}

}

export default MapContainer
