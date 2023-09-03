import "~/css/global.css";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const AppLayout = () => {
  return (
    <SafeAreaView
      className='flex-1'
      style={{ marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor='#222' barStyle='default' />
      <QueryClientProvider client={new QueryClient()}>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(main)' options={{ headerShown: false }} />
          <Stack.Screen name='welcome' options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default AppLayout;
