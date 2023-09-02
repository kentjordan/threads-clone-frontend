import React from "react";
import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, Text, View } from "react-native";

const HomePage = () => {
  return (
    <>
      <StatusBar backgroundColor='#222' barStyle='light-content' />
      <Tabs
        detachInactiveScreens
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
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
            tabBarIcon: () => (
              <Octicons name='search' size={24} color='white' />
            ),
          }}
        />
        <Tabs.Screen
          name='new_thread'
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons
                style={{ marginTop: -4 }}
                name='create-outline'
                size={30}
                color='white'
              />
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
            tabBarIcon: () => (
              <Octicons name='person' size={24} color='white' />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default HomePage;
