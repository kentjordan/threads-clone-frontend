import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex flex-1 justify-center items-center '>
        <Text>Login Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
