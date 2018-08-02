import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import LeafletMap from "./LeafletMap";
import SettingsForm from "./SettingsForm.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { layer: '', latitude: 0.0, longitude: 0.0};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(mapParameters) {
    this.setState({layer: mapParameters['layer'],latitude: parseFloat(mapParameters['latitude']), longitude: parseFloat(mapParameters['longitude'])}, () => {
      console.log(this.state);
    });
   }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/"
            render={() => <SettingsForm onParamSubmit = {this.handleFormSubmit} />}
          />
          <Route path="/map1"
            render={() => <LeafletMap parameters = {this.state} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
