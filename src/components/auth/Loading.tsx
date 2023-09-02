import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => (
  <View className='flex-row justify-center items-center my-2 w-full'>
    <ActivityIndicator color='white' className='mr-1' />

    <Text style={{ color: "white" }} className='ml-1 text-stone-400'>
      Getting ready for threads...
    </Text>
  </View>
);

export default Loading;
