import { MaterialIcons } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import uuid from "react-native-uuid";

import StartThread from "~/components/new_thread/StartThread";
import AddToThread from "~/components/new_thread/AddToThread";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { securedAPI } from "~/api";
import Animated, { SlideInDown } from "react-native-reanimated";
import { ITokens } from "~/@types";
import { INewThreadInput } from "~/@types/modules/new_thread";

const ThreadsPage = () => {
  const nav = useNavigation();

  const [startThreadItems, setStartThreadItem] = useState([
    { id: uuid.v4(), StartThread },
  ]);

  const { control, formState, unregister, handleSubmit } = useForm();

  const cleanThreads = () => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  };

  const { mutateAsync, error } = useMutation<
    AxiosResponse,
    AxiosError,
    INewThreadInput
  >({
    mutationKey: [`start-thread`],
    mutationFn: async (input: INewThreadInput) => {
      const tokensInStorage = (await AsyncStorage.getItem("tokens")) as string;

      const tokens = JSON.parse(tokensInStorage) as ITokens;

      return securedAPI.post("/threads", input, {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });
    },
  });

  useLayoutEffect(() => {
    nav.setOptions({ tabBarStyle: { display: "none" } });
  });

  return (
    <Animated.View
      entering={SlideInDown}
      className='flex flex-1 h-full w-full justify-center items-center bg-black'>
      <View className='flex w-full bg-black border-b border-b-white/25 flex-row items-center'>
        <View className='flex flex-row items-center m-4'>
          <Pressable onPress={cleanThreads}>
            <MaterialIcons name='close' size={20} color='white' />
          </Pressable>
          <Text className='mx-2 font-medium text-stone-50'>New thread</Text>
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps='always'
        className='flex w-full bg-black'>
        {/* Start a thread... */}
        {startThreadItems.map(({ id, StartThread }, index) => (
          <StartThread
            key={id}
            control={control}
            formState={formState}
            startThreadItems={startThreadItems}
            setStartThreadItem={setStartThreadItem}
            uuid={id}
            unregister={unregister}
          />
        ))}
        {/* Add to thread */}
        <AddToThread {...{ startThreadItems, setStartThreadItem }} />
      </ScrollView>
      <View className='flex-row justify-between items-center p-2 bg-black w-full'>
        <Text className='text-[#777]'>Your followers can reply</Text>
        <Pressable
          onPress={handleSubmit((data: Record<string, string>) => {
            const keys = Object.keys(data);

            // TODO: Should differentiate the content_text and content_photos
            // const threadsData: IThreadsData = keys.map((e, i) => {
            //   const key = keys[i];
            //   const value = data[key];
            //   const [type, id] = e.split(":");
            //   return { id, type, value };
            // });

            /**
             *  TODO: Make an API call to the threads table to upload the data
             *
             * threadsData.forEach((e, i) => {
             *    if (e.type === "content_text") {
             *      mutateAsync({
             *        content_text: e.value as string,
             *        content_photos: [...e.value],
             *      });
             *    }
             * });
             *
             *
             */
          })}>
          <Text className='font-medium text-lg text-cyan-600'>Post</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

type IThreadsData = Array<{
  id: string;
  type: "content_text" | "content_photos";
  value: string | string[];
}>;

export default ThreadsPage;
