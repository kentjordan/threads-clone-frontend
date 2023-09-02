import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <StatusBar backgroundColor='#222' barStyle='light-content' />
      <Stack>
        <Stack.Screen
          name='login'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='signup'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
