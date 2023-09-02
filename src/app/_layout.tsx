import "~/css/global.css";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const AppLayout = () => {
  return (
    <SafeAreaView
      className='flex-1'
      style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor='#222' barStyle='default' />
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(main)' options={{ headerShown: false }} />
        <Stack.Screen name='welcome' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};

export default AppLayout;
