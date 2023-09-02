import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";

const SignupPage = () => {
  const router = useRouter();

  return (
    <ImageBackground
      className='flex flex-1 justify-center items-center bg-black p-8'
      source={require("@assets/images/background.png")}>
      <View className='border border-zinc-600 w-full bg-zinc-800 rounded-2xl pb-4 pt-4'>
        <View className='my-2'>
          <Text className='text-white text-xs mx-6'>First name</Text>
          <TextInput className='mx-6 text-white my-2' selectionColor='white' />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='my-2'>
          <Text className='text-white text-xs mx-6'>Last name</Text>
          <TextInput className='mx-6 text-white my-2' selectionColor='white' />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='my-2'>
          <Text className='text-white text-xs mx-6'>Email</Text>
          <TextInput className='mx-6 text-white my-2' selectionColor='white' />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='mt-2 '>
          <Text className='text-white text-xs mx-6'>Password</Text>
          <TextInput className='mx-6 text-white' selectionColor='white' />
        </View>
      </View>
      <Pressable className='my-4' onPress={() => router.replace("/login")}>
        <Text className='text-white font-bold'>
          Already have an account? LOG IN
        </Text>
      </Pressable>
      <View className='absolute my-8 bottom-0 w-full flex items-center px-4'>
        <Pressable className='my-2 w-full'>
          <View className='flex flex-row bg-white p-3 rounded-lg justify-center'>
            <Text className='text-black font-bold'>SIGN UP</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default SignupPage;
