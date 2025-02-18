import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const MenuButton = require("@/assets/images/Menu.png");
const ArrowDown = require("@/assets/images/ArrowDown.png");
const welcomePic = require("@/assets/images/WelcomePicture.png");
const wave = require("@/assets/images/Wave.png");

const OnBoarding1 = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image source={MenuButton} style={styles.menuButton} />
          <Text style={styles.dashboard}>Dashboard</Text>
          <Text>NGN 50,000</Text>
          <Image source={ArrowDown} />
        </View>
      </View>
      <View style={styles.welcome}>
        <Image source={welcomePic} style={styles.welcomePic} />
        <View style={styles.welcomeDetails}>
          <View style={styles.welcomeDetailsTexts}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.welcomeText2}>just few more steps to go</Text>
          </View>

          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore</Text>
          </Pressable>
        </View>

        <Image source={wave} style={styles.wave} />
      </View>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0ccff",
    flex: 1,
  },
  container: {
    opacity: 0.5,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 3,
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 110,
  },
  dashboard: {
    marginRight: 40,
  },

  welcome: {
    position: "absolute",
    width: 252,
    height: 487,
    top: 118,
    left: 59,
    backgroundColor: "white",
  },
  welcomePic: {
    marginHorizontal: "auto",
  },
  welcomeDetails: {
    marginTop: -40,
    width: 252,
    height: 407,
    backgroundColor: "#fcf5ff",
  },
  welcomeDetailsTexts: {
    marginTop: 193,
    marginHorizontal: "auto",
  },

  welcomeText: {
    fontSize: 24,
    color: "#bc4e00",
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: 0.2,
  },

  welcomeText2: {
    fontSize: 10,
  },

  exploreButton: {
    marginHorizontal: "auto",
    width: 150,
    height: 40,
    backgroundColor: "#4c1961",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
  },

  exploreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
  },
  wave: {
    position: "absolute",
    bottom: -12,
  },
});
