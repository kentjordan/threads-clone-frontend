import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const ActivityPage = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex flex-1 justify-center items-center bg-stone-950'>
        <Text className='text-stone-50'>Activity Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default ActivityPage;
