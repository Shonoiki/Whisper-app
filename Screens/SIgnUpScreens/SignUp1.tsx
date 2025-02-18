import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
const logo = require("@/assets/images/WhisperLogo.png");
const google = require("@/assets/images/Google.png");
const facebook = require("@/assets/images/Facebook.png");
const ViewOff = require("@/assets/images/ViewOff.png");
const arrowDown = require("@/assets/images/ArrowDown.png");
const checkBox = require("@/assets/images/CheckBox.png");

const SignUp1 = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>WhisperSMS</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.signUpBox}>
            <Text style={styles.signUpText}>Sign up</Text>
            <View style={styles.socials}>
              <Image source={google} />
              <Image source={facebook} />
            </View>
          </View>
          <View style={styles.getStartedBox}>
            <Text style={styles.getStarted}>sign up to get started</Text>
            <Text style={styles.signUpSocials}>Sign up with socials</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Firstname"
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Lastname"
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
            />
            <Image source={ViewOff} />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
            />
            <Image source={ViewOff} />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholder="Location"
            />
            <Image source={arrowDown} />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              value={industry}
              onChangeText={setIndustry}
              placeholder="Industry"
            />
            <Image source={arrowDown} />
          </View>
          <View style={styles.conditions}>
            <Image source={checkBox} />
            <Text style={[styles.conditionsText, styles.conditionsColored]}>
              I agree to receive commercial information from Whisper sms
            </Text>
          </View>
          <View style={styles.conditions}>
            <Image source={checkBox} />
            <Text style={styles.conditionsText}>
              I agree to the{" "}
              <Text style={styles.conditionsColored}>Terms and Conditions</Text>
            </Text>
          </View>

          <Pressable
            style={styles.signUpButton}
            onPress={() => setSignUpModal(true)}
          >
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </Pressable>
          <Modal visible={signUpModal}>
            <View
              style={[
                styles.background,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <View style={styles.modalContent}>
                <Text style={styles.confirm}>Confirm Phone Number</Text>
                <Text style={styles.confirmDetails}>
                  We will be Verifying the phone number <Text>{phone}. </Text>
                  is this okay or would you like to edit the number
                </Text>

                <View style={styles.modalButtons}>
                  <Pressable
                    style={styles.modalEditButton}
                    onPress={() => setSignUpModal(false)}
                  >
                    <Text style={styles.buttonText}>Edit number</Text>
                  </Pressable>

                  <View style={{ borderWidth: 0.2 }}></View>

                  <Pressable
                    style={styles.modalEditButton}
                    onPress={() => navigation.navigate("OTP")}
                  >
                    <Text style={styles.buttonText}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <View style={styles.issuesBox}>
            <Text style={[styles.issues]}>Already have an account? </Text>
            <Pressable>
              <Text style={styles.LoginButton}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.issuesBox}>
            <Text style={styles.issues}>Having a problem onboadring? </Text>
            <Pressable>
              <Text style={[styles.contactUs, styles.issues]}>
                Chat with us
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp1;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f0ccff",
  },

  container: {
    width: 340,
    height: 745,
    backgroundColor: "white",
    margin: "auto",
  },

  logoBox: {
    width: 105,
    height: 58,
    borderRadius: 4,
    backgroundColor: "#4c1961",
    marginHorizontal: "auto",
    marginTop: 12,
  },
  logo: {
    width: 31.2,
    height: 26,
    marginHorizontal: "auto",
    marginTop: 9,
  },
  logoText: {
    color: "#fff",
    fontSize: 10,
    marginHorizontal: "auto",
  },
  content: {
    width: 305,
    marginHorizontal: "auto",
  },

  signUpBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  signUpText: {
    fontSize: 20,
    fontWeight: 700,
  },
  socials: {
    flexDirection: "row",
    gap: "18",
  },
  getStartedBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  getStarted: {
    fontSize: 10,
    color: "#4e4e4e",
  },

  signUpSocials: {
    fontSize: 10,
    color: "#4e4e4e",
  },
  inputBox: {
    width: 308,
    height: 40,
    borderWidth: 1,
    borderColor: "#e9ebee",
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  conditions: {
    flexDirection: "row",
    marginTop: 10,
    gap: 5,
    width: 230,
    alignItems: "center",
  },
  conditionsText: {
    fontSize: 10,
  },
  conditionsColored: {
    color: "#bc4e00",
  },
  signUpButton: {
    width: 309,
    height: 40,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4c1961",
    borderRadius: 6,
  },
  signUpButtonText: {
    color: "#fff",
  },
  issuesBox: {
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },

  issues: {
    fontSize: 8,
  },

  LoginButton: {
    color: "#bc4e00",
  },
  contactUs: {
    color: "#4c1961",
    fontWeight: 600,
  },

  modalContent: {
    width: 273,
    height: 161,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },

  confirm: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 24,
    marginBottom: 6,
  },
  confirmDetails: {
    width: 225,
    fontSize: 12,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: "auto",
    width: 272,
    height: 37,
    borderWidth: 1,
    borderColor: "#c7c7c7",
  },
  modalEditButton: {
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  buttonText: {
    marginHorizontal: "auto",
  },
});
