import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import SplashScreen2 from "./SplashScreen2";
const Splash1Background = require("@/assets/images/Rectangle.png");
const Splash1BackgroundLogo = require("@/assets/images/Group.png");
const WhisperLogo = require("@/assets/images/WhisperLogo.png");
const RectangleShort = require("@/assets/images/RectangleShort.png");
const RectangleLong = require("@/assets/images/RectangleLong.png");

const SplashScreen1 = () => {
  const [changeScreen, setChangeScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 3000);
  }, []);
  // const navigation = useNavigation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.dispatch(
  //       SplashScreen1.reset({ index: 1, routes: [{ name: "SplashScreen2" }] })
  //     );
  //   }, 30000);
  // }, []);
  return changeScreen ? (
    <SplashScreen2 />
  ) : (
    <SafeAreaView style={styles.container}>
      <Image style={styles.Splash1BackgroundImage} source={Splash1Background} />
      <View style={styles.backgroundLogo}>
        <Image source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.backgroundLogo2}>
        <Image style={styles.logo2Img} source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo3}>
        <Image style={styles.logo3Img} source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo4}>
        <Image style={styles.logo4Img} source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo5}>
        <Image style={styles.logo5Img} source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo6}>
        <Image source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo7}>
        <Image source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.logo8}>
        <Image source={Splash1BackgroundLogo} />
      </View>
      <View style={styles.whisperLogo}>
        <Image style={styles.whisperLogoImg} source={WhisperLogo} />
      </View>
      <Text style={styles.whisperLogoText}>WhisperSMS</Text>
      <View style={styles.RectangleShort}>
        <Image source={RectangleShort} />
      </View>
      <View style={styles.rectangleLong}>
        <Image source={RectangleLong} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },

  RectangleShort: {
    position: "absolute",
    top: 399,
    left: 161,
  },
  rectangleLong: {
    marginTop: 5,
    marginHorizontal: "auto",
  },

  Splash1BackgroundImage: {},
  backgroundLogo: {
    position: "absolute",
    top: 176,
    left: 140,
  },

  backgroundLogo2: {
    position: "absolute",
    top: 216,
    left: 6,
  },

  logo2Img: {
    width: 52.8,
    height: 44,
  },

  logo3: {
    position: "absolute",
    top: 25,
    left: 39,
  },
  logo3Img: {
    width: 43.2,
    height: 36,
  },

  logo4: {
    position: "absolute",
    top: -7,
    left: 301.82,
  },

  logo4Img: {
    width: 40.3,
    height: 33.6,
  },

  logo5: {
    position: "absolute",
    top: 56,
    left: 153,
  },

  logo5Img: {
    width: 33.6,
    height: 27.81,
  },

  logo6: {
    position: "absolute",
    top: 163.31,
    left: 326.15,
  },

  logo7: {
    position: "absolute",
    top: 272.21,
    left: 278.65,
  },

  logo8: {
    position: "absolute",
    top: 319,
    left: 36.72,
  },

  whisperLogo: {
    position: "absolute",
    top: 301,
    left: 149,
  },

  whisperLogoImg: {
    width: 60,
    height: 50,
  },

  whisperLogoText: {
    position: "absolute",
    top: 358,
    left: 112,
    color: "#ecd6f5",
    fontSize: 24,
    fontWeight: 600,
  },
});
