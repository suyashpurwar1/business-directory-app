import { Colors } from "@/constants/Colors";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import React from "react";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signin or signup for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
        <Image
          source={require("./../assets/images/login.png")}
          style={{
            width: 250,
            height: 500,
            borderRadius: 15,
            borderWidth: 4,
            borderColor: "#000",
          }}
        />
      </View>

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Your Ultimate
          <Text style={{ color: Colors.primary }}>
            Community Business Directory
          </Text>
          App
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontFamily: "outfit",
            marginVertical: 15,
            color: Colors.gray,
          }}
        >
          Find your favourrite business near your and post your own business to
          your community
        </Text>
        <TouchableOpacity style={styles.btn}
        onPress={onPress}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "#fff",
              fontfamily: "outfit",
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
});
