import { useNavigation } from "expo-router";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const Splash2Background = require("@/assets/images/Splash2Bg.png");
const WhisperLogo2 = require("@/assets/images/WhisperLogo2.png");
const BottomPic = require("@/assets/images/Splash2Pic.png");
const RectangleLong = require("@/assets/images/RectangleLong.png");

const SplashScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Image source={Splash2Background} />
      </View>
      <View style={styles.logo}>
        <Image source={WhisperLogo2} />
        <Text style={styles.logoText}>WhisperSMS</Text>
        <Text style={styles.quick}>Quick and Advance </Text>
        <Text style={[styles.quick, styles.quickSpacing]}>Bulk SMS</Text>
        <Text style={styles.convinient}>A convinient way-to-reach</Text>
        <Text style={styles.convinient}>your customers at a go</Text>

        <Image style={{ marginTop: 48 }} source={BottomPic} />
      </View>
      <Image style={styles.bottomBorder} source={RectangleLong} />

      <View style={styles.buttonSection}>
        <Pressable onPress={() => navigation.navigate("SignUp1")}>
          <View style={[styles.buttons, styles.signUpButton]}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </View>
        </Pressable>

        <Pressable>
          <View style={[styles.buttons, styles.loginButton]}>
            <Text>Log in</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    marginTop: 112,
    marginLeft: 36,
    marginBottom: 6,
  },

  buttonSection: {
    flexDirection: "row",
    marginTop: 29,
    justifyContent: "center",
    gap: 9,
  },

  buttons: {
    justifyContent: "center",
    alignItems: "center",
    width: 125,
    height: 40,
    borderRadius: 6,
  },

  signUpButton: {
    backgroundColor: "#4c1961",
  },

  signUpButtonText: {
    color: "#fff",
  },

  loginButton: {
    borderWidth: 1,
    borderColor: "#4c1961",
  },

  logoText: {
    color: "#4c1961",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.16,
    marginBottom: 36,
  },

  quick: {
    fontSize: 20,
    fontWeight: 600,
  },

  quickSpacing: {
    marginBottom: 9,
  },

  convinient: {
    fontSize: 10,
    fontWeight: 400,
    color: "#4e4e4e",
  },
  bottomBorder: {
    marginHorizontal: "auto",
    marginTop: 4,
  },
});
