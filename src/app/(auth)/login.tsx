import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";
import Loading from "~/components/auth/Loading";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { valLoginInput } from "~/validators/auth/login";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { publicAPI } from "~/api";
import { AxiosError, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
type FormValues = z.infer<typeof valLoginInput>;

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

const LoginPage = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(valLoginInput) });

  const { isLoading, mutateAsync } = useMutation<
    AxiosResponse<LoginResponse, any>,
    AxiosError,
    FormValues
  >({
    mutationKey: ["login"],
    mutationFn: (data: FormValues) => publicAPI.post("/auth/login", data),
    onError(error, variables, context) {
      if (error.response?.status === 404) {
        Alert.alert(
          "Invalid credentials",
          "Can't find your email. Please try again."
        );
      }

      if (error.response?.status === 400) {
        Alert.alert(
          "Invalid credentials",
          "Invalid password. Please try again."
        );
      }
    },
    async onSuccess({ data }) {
      await AsyncStorage.setItem("tokens", JSON.stringify(data));
      router.replace("/home");
    },
  });

  return (
    <ImageBackground
      className='flex flex-1 justify-center items-center bg-black p-8'
      source={require("@assets/images/background.png")}>
      <View className='border border-zinc-600 w-full bg-zinc-800 rounded-2xl pb-4 pt-4'>
        <View className='my-2'>
          <Text
            className={`text-white text-xs mx-6 ${
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
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white my-2'
                selectionColor='white'
              />
            )}
          />
          <View className='border-b border-zinc-600'></View>
        </View>
        <View className='mt-2 '>
          <Text
            className={`text-white text-xs mx-6 ${
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
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                className='mx-6 text-white my-2'
                secureTextEntry
                selectionColor='white'
              />
            )}
          />
        </View>
      </View>
      <Pressable className='my-4' onPress={() => router.replace("/signup")}>
        <Text className='text-white font-bold'>
          Don't have an account? SIGN UP
        </Text>
      </Pressable>
      <View className='absolute my-4 bottom-0 w-full flex items-center px-4'>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <Pressable
            className='my-2 w-full'
            onPress={handleSubmit((data: FormValues) => {
              mutateAsync(data);
            })}>
            <View className='flex flex-row bg-white p-3 rounded-lg justify-center'>
              <Text className='text-black font-bold'>LOG IN</Text>
            </View>
          </Pressable>
        )}
      </View>
    </ImageBackground>
  );
};

export default LoginPage;
