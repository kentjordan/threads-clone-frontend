import React from "react";
import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const HomePage = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Octicons name='home' size={24} color='white' />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Octicons name='search' size={24} color='white' />,
        }}
      />
      <Tabs.Screen
        name='threads'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name='create-outline' size={28} color='white' />
          ),
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Octicons name='heart' size={24} color='white' />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Octicons name='person' size={24} color='white' />,
        }}
      />
    </Tabs>
  );
};

export default HomePage;
