import { View, Text, Pressable, TextInput, StatusBar } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar backgroundColor='#222' barStyle='default' />
      <ImageBackground
        className='flex flex-1 justify-center items-center bg-black p-8'
        source={require("@assets/images/background.png")}>
        <View className='absolute my-8 px-4 bottom-0 w-full flex items-center'>
          <Pressable
            className='my-2 w-full'
            onPress={() => router.push("/login")}>
            <View className='flex flex-row border-zinc-600 border bg-zinc-800 p-3 rounded-lg justify-center'>
              <Text className='text-white font-bold'>LOG IN</Text>
            </View>
          </Pressable>
          <Pressable
            className='my-2 w-full'
            onPress={() => router.push("/signup")}>
            <View className='flex flex-row bg-white p-3 rounded-lg justify-center'>
              <Text className='text-black font-bold'>SIGN UP</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomePage;
