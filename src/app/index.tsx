import { View, ActivityIndicator, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    setImmediate(() => {
      // TODO: Setup authentication
      router.replace("/home");
    });
  });

  return (
    <View className='flex flex-1 justify-center items-center'>
      <ActivityIndicator className='m-4' />
      <Text>Authenticating...</Text>
    </View>
  );
};

export default App;
