import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";
import { valSignupInput } from "~/validators/auth/signup";
import Loading from "~/components/auth/Loading";

const SignupPage = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(valSignupInput) });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageBackground
      className='flex flex-1 justify-center items-center bg-black p-8'
      source={require("@assets/images/background.png")}>
      <View className='border border-zinc-600 w-full bg-zinc-800 rounded-2xl pb-4 pt-4'>
        <View className='my-2'>
          <Text
            className={`text-xs mx-6 ${
              errors.first_name?.type === "invalid_type" ||
              errors.first_name?.type === "too_small"
                ? "text-red-500"
                : "text-white"
            }`}>
            First name {errors.first_name?.type === "invalid_type" ? "*" : ""}
            {errors.first_name?.type === "too_small"
              ? "(atleast 2 characters)"
              : ""}
          </Text>
          <Controller
            control={control}
            name='first_name'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white my-2'
                selectionColor='white'
              />
            )}
            rules={{ required: true }}
          />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='my-2'>
          <Text
            className={`text-xs mx-6 ${
              errors.last_name?.type === "invalid_type" ||
              errors.last_name?.type === "too_small"
                ? "text-red-500"
                : "text-white"
            }`}>
            Last name {errors.first_name?.type === "invalid_type" ? "*" : ""}
            {errors.last_name?.type === "too_small"
              ? "(atleast 2 characters)"
              : ""}
          </Text>
          <Controller
            control={control}
            name='last_name'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white my-2'
                selectionColor='white'
              />
            )}
            rules={{ required: true }}
          />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='my-2'>
          <Text
            className={`text-xs mx-6 ${
              errors.email?.type === "invalid_type" ||
              errors.email?.type === "invalid_string"
                ? "text-red-500"
                : "text-white"
            }`}>
            Email {errors.email?.type === "invalid_type" ? "*" : ""}
            {errors.email?.type === "invalid_string" ? "(invalid email)" : ""}
          </Text>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white my-2'
                selectionColor='white'
              />
            )}
            rules={{ required: true }}
          />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='mt-2 '>
          <Text
            className={`text-xs mx-6 ${
              errors.password?.type === "invalid_type" ||
              errors.password?.type === "too_small"
                ? "text-red-500"
                : "text-white"
            }`}>
            Password {errors.password?.type === "invalid_type" ? "*" : ""}
            {errors.password?.type === "too_small"
              ? "(atleast 8 characters)"
              : ""}
          </Text>
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white'
                selectionColor='white'
              />
            )}
            rules={{ required: true }}
          />
        </View>
      </View>
      <Pressable className='my-4' onPress={() => router.replace("/login")}>
        <Text className='text-white font-bold'>
          Already have an account? LOG IN
        </Text>
      </Pressable>
      <View className='absolute my-4 bottom-0 w-full flex items-center px-4'>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <Pressable className='my-2 w-full' onPress={handleSubmit(onSubmit)}>
            <View className='flex flex-row bg-white p-3 rounded-lg justify-center'>
              <Text className='text-black font-bold'>SIGN UP</Text>
            </View>
          </Pressable>
        )}
      </View>
    </ImageBackground>
  );
};

const onSubmit = (data: any) => {
  console.log({ data });
};

export default SignupPage;
