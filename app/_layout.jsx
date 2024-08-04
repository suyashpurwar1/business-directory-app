import { ClerkProvider, SignedIn, SignedOut,ClerkLoaded } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import LoginScreen from "./../components/LoginScreen";

import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error("Error getting token:", err);
      return null;
    }
  },

  async saveToken(key, value){
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error saving token:", err);
    }
  },
};

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider
    tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ClerkLoaded>
        <SignedIn>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
