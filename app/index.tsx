import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import SplashScreen1 from "@/Screens/SplashScreens/SplashScreen1";
import SplashScreen2 from "@/Screens/SplashScreens/SplashScreen2";
import SignUp1 from "@/Screens/SIgnUpScreens/SignUp1";
import OTP from "@/Screens/SIgnUpScreens/OTP";
import OnBoarding1 from "@/Screens/OnBoarding/OnBoarding1";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Splash1" component={SplashScreen1} />
      <stack.Screen name="Splash2" component={SplashScreen2} />
      <stack.Screen name="SignUp1" component={SignUp1} />
      <stack.Screen name="OTP" component={OTP} />
      <stack.Screen name="OnBoarding1" component={OnBoarding1} />
      {/* <Tab.Navigator>
        <Tab.Screen name="SplashScreen2" component={SplashScreen2} />
        <Tab.Screen name="SplashScreen1" component={SplashScreen1} />
      </Tab.Navigator> */}
    </stack.Navigator>
  );
}
