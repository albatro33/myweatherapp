import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weaather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "39045e69746e6d22355f1641518a9d1d";
const weatherURL = "http://api.openweathermap.org/data/2.5/weather";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `${weatherURL}?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Cant't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weaather temp={Math.round(temp)} condition={condition} />
    );
  }
}
