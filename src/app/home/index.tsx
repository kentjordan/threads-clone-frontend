import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const HomePage = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex flex-1 justify-center items-center '>
        <Text>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
