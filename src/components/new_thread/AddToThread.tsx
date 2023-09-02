import { View, Text, Pressable } from "react-native";
import React from "react";
import StartThread from "./StartThread";
import { Image } from "expo-image";
import uuid from "react-native-uuid";

const AddToThread = ({ startThreadItems, setStartThreadItem }: any) => {
  return (
    <Pressable
      onPress={() => {
        setStartThreadItem([
          ...startThreadItems,
          { id: uuid.v4(), StartThread },
        ]);
      }}>
      <View className='flex flex-row px-2 items-center'>
        <View className='flex justify-center items-center mr-3 h-10 w-10'>
          <Image
            className='h-5 w-5 rounded-full opacity-50'
            source={`https://picsum.photos/500/500`}
          />
        </View>
        <View className='flex-1'>
          <Text className='text-[#777] opacity-50'>Add to thread</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AddToThread;
