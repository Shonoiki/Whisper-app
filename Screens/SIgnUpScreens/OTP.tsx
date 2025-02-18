import { StyleSheet, Text, View, Image, Pressable } from "react-native";
const transactionSMS = require("@/assets/images/TransactionSMS.png");
import { useNavigation } from "expo-router";
const OTP = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={transactionSMS} />
      <Text style={styles.verify}>Please Verify Your Phone no</Text>
      <Text style={styles.enter}>enter the code sent to your mobile</Text>
      <Text style={styles.phone}>09016234928</Text>

      <Text style={styles.noReceive}>
        Didn't receive the otp?
        <Pressable style={styles.resendButton}>
          <Text style={styles.resend}> RESEND </Text>
        </Pressable>
        in 3:00
      </Text>

      <Pressable
        style={styles.continueButton}
        onPress={() => navigation.navigate("OnBoarding1")}
      >
        <Text style={styles.continue}>Continue</Text>
      </Pressable>

      <Text style={styles.problem}>
        Having problem verifying your otp?
        <Text style={styles.chatUs}>CHAT US</Text>
      </Text>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginHorizontal: "auto",
    marginTop: 111,
  },

  verify: {
    fontWeight: 700,
    marginTop: 10,
    fontSize: 16,
  },
  enter: {
    fontSize: 12,
    fontWeight: 500,
    marginVertical: 3,
  },
  phone: {
    color: "#9400d3",
  },
  noReceive: {
    marginTop: 90,
  },
  resendButton: {
    justifyContent: "center",
    marginTop: 8,
  },
  resend: {
    color: "#bc4e00",
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#4c1961",
    marginTop: 44,
    width: 209,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    borderRadius: 6,
  },
  continue: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
  },
  problem: {
    fontSize: 10,
    fontWeight: 500,
    textAlign: "center",
    letterSpacing: 0.2,
    marginTop: 10,
  },
  chatUs: {
    fontWeight: 600,
    color: "#bc4e00",
  },
});
