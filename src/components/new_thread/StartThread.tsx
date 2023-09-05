import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import { Image } from "expo-image";
import { Controller } from "react-hook-form";

const StartThread = ({
  startThreadItems,
  setStartThreadItem,
  uuid,
  control,
  formState,
  unregister,
}: any) => {
  const [isFocused, setIsFocused] = useState(true);

  const CONTROLLER_CONTENT_TEXT_ID = `content_text:${uuid}`;

  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutDown}
      className='flex flex-row pt-2 px-2'
      key={uuid}>
      <View className='mr-3 flex items-center rounded-full'>
        <Image
          className=' my-1 h-10 w-10 rounded-full'
          source={`https://picsum.photos/500/500`}
        />
        {isFocused ? (
          <Animated.View
            entering={FadeInUp.duration(200)}
            exiting={FadeOutDown}
            className='w-[1px] bg-stone-700 h-12 my-2'
          />
        ) : (
          <></>
        )}
      </View>
      <View className='flex-1'>
        <Text className='text-white'>kjordan_xyz</Text>
        <Controller
          name={CONTROLLER_CONTENT_TEXT_ID}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => {
            return (
              <TextInput
                value={value}
                onChangeText={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                multiline
                autoFocus
                className='my-1 text-white'
                placeholder='Start a thread...'
                placeholderTextColor='#777'
                selectionColor='white'
              />
            );
          }}
        />
        {isFocused ? (
          <Animated.View
            entering={FadeInUp.duration(200)}
            exiting={FadeOutDown}
            className='mt-2'>
            <Entypo name='attachment' size={16} color='#777' />
          </Animated.View>
        ) : (
          <></>
        )}
      </View>
      {/* Remove button */}
      {startThreadItems.length <= 1 ? (
        <></>
      ) : (
        <Pressable
          onPress={() => {
            unregister(CONTROLLER_CONTENT_TEXT_ID);
            setStartThreadItem((prev: any) =>
              prev.filter(({ id, StartThread }: any, i: any) => {
                return id !== uuid;
              })
            );
          }}>
          <MaterialIcons name='close' size={16} color='#777' />
        </Pressable>
      )}
    </Animated.View>
  );
};

export default StartThread;
