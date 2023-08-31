import "~/css/global.css";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

const AppLayout = () => {
  return (
    <SafeAreaView
      className='flex-1'
      style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor='dark' barStyle='light-content' />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(main)' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};

export default AppLayout;
