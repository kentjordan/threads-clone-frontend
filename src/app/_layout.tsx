import "~/css/global.css";
import React from "react";
import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='home' options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;
