import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#f5af19", "#f12711"],
    title: "안개낌",
    msg: "흐리다 조심해라"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2ebf91", "#8360c3"],
    title: "맑음",
    msg: "맑아도 갈곳이 없다"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#0f0c29", "#24243e"],
    title: "비",
    msg: "우산 챙겨라"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#093637", "#44A08D"],
    title: "구름",
    msg: "구름끼니 기분이 괜히 좋네"
  },

  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#34e89e", "#0f3443"],
    title: "폭풍우",
    msg: "더욱 거세게 몰아쳐라"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#45a247", "#283c86"],
    title: "안개비",
    msg: "가랑비에 옷젖는다"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C33764", "#1D2671"],
    title: "눈",
    msg: "군인들 고생하겠다"
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#C6426E", "#642B73"],
    title: "습함",
    msg: "겨땀주의"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#396afc", "#2948ff"],
    title: "안개",
    msg: "수분가득 탄력있는  피부"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#06beb6", "#48b1bf"],
    title: "미세먼지",
    msg: "나를 키운건 팔할이 먼지요 바람이다"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={86}
          name={weatherOptions[condition].iconName}
          color="#fff"
        />
        <Text style={styles.temp}>{temp}&deg;</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.msg}>{weatherOptions[condition].msg}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 39,
    color: "#fff"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "400",
    marginBottom: 10
  },
  msg: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
