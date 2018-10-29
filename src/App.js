import React, { Component } from "react";
import UserInput from "./UserInput";
import Grants from "./Grants";
import "./App.css";
class App extends Component {
  state = {
    postcode: "",
    lat: "",
    long: "",
    grants: []
  };
  setPostcode = e => {
    this.setState({ postcode: e.target.value });
  };
  search = async e => {
    e.preventDefault();
    try {
      const { postcode } = this.state;
      const { lat, long } = await this.getLongitudeAndLaitude(postcode);
      const response = await this.getAllGrantsByLatLong(lat, long);
      this.setState({ grants: response.data.grants });
    } catch (err) {
      this.setState({
        hasError: true,
        error: "Search did not complete"
      });
    }
  };
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error
    });
    this.logErrorToMyService(error, info);
  }
  logErrorToMyService = err => {
    console.error(err);
  };

  getLongitudeAndLaitude = async postcode => {
    //get info from user postcode
    try {
      const convertUserData = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      const response = await convertUserData.json();
      //Latitude and Longitude from the api response
      let postcodeLat = response.result.latitude;
      let postcodeLong = response.result.longitude;
      return {
        lat: postcodeLat,
        long: postcodeLong
      };
    } catch (err) {
      console.error("Postcode is not valid", err);
    }
  };

  getAllGrantsByLatLong = async (lat, long, range = "15") => {
    try {
      const fetechedUrl = await fetch(
        `https://1kfs7evxca.execute-api.eu-west-1.amazonaws.com/beta/grants-geo/?latitude=${lat}&longitude=${long}&range=${range}km`
      );
      const response = await fetechedUrl.json();
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { postcode, grants } = this.state;

    return (
      <div className="App">
        <UserInput
          postcode={postcode}
          search={this.search}
          setPostcode={this.setPostcode}
        />
        {this.state.hasError ? (
          <span className="text-danger">
            There was an error performing your search, make sure you have a
            valid postcode.
          </span>
        ) : null}
        <Grants grants={grants} />
      </div>
    );
  }
}

export default App;
