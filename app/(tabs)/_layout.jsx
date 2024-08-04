import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {Colors} from './../../constants/Colors'
export default function Tablayout() {
  return (
    <Tabs screenOptions={{ headerShown: false,tabBarActiveTintColor:Colors.primary }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
