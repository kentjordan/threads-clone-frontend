import { View, Text, Pressable, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileTabView from "~/components/profile/tab_view/tab_view";
import { Image } from "expo-image";

const ProfilePage = () => {
  return (
    <View className='flex-1 bg-black'>
      {/* Lock, Instagram */}
      <View className='flex-row justify-between items-center py-2  px-2 fixed'>
        <Ionicons name='lock-closed-outline' size={20} color='white' />
        <View className='flex-row'>
          <Ionicons
            name='logo-instagram'
            style={{ marginRight: 4 }}
            size={20}
            color='white'
          />
          <Ionicons
            name='reorder-two-outline'
            style={{ marginLeft: 4 }}
            size={20}
            color='white'
          />
        </View>
      </View>
      {/* Profile */}
      <View className='w-full px-2 '>
        {/* Information */}
        <View className=' flex-row justify-between'>
          <View className='flex-1'>
            <Text className='my-1 text-xl font-bold text-stone-50'>
              K. Jordan
            </Text>
            <Text className='my-1 text-stone-50 font-medium'>kjordan_xyz</Text>
            <Text className='my-1 text-stone-50'>
              Introverted-NTJ. I value time and love wisdom but I know nothing.
            </Text>
            <View className='flex-row items-center'>
              <Image
                className='z-10 bg-white h-4 w-4 rounded-full my-1  border-stone-950 border'
                source={`https://picsum.photos/500/500`}
              />
              <Image
                className='mx-[-4px] bg-white h-4 w-4 rounded-full my-1  border-stone-950 border'
                source={`https://picsum.photos/500/500`}
              />
              <Text className='mx-4 my-1 text-stone-500'>16 followers</Text>
            </View>
          </View>
          <View className='ml-16 items-end justify-start'>
            {/* Profile Photo */}
            <Image
              className='bg-white h-14 w-14 rounded-full my-1'
              source={`https://picsum.photos/500/500`}
            />
            {/* Profile Photo */}
          </View>
          <View></View>
        </View>
        {/* Buttons: Edit profile, Share profile */}
        <View className='flex-row my-2 '>
          <Pressable className='border border-stone-500 p-1 mr-1 rounded-lg flex-1 justify-center items-center'>
            <Text className='text-stone-50'>Edit profile</Text>
          </Pressable>
          <Pressable className='border border-stone-500 p-1 ml-1 rounded-lg flex-1 justify-center items-center'>
            <Text className='text-stone-50'>Share profile</Text>
          </Pressable>
        </View>
      </View>
      {/* Threads */}
      <View className=' w-full flex-1'>
        <ProfileTabView />
      </View>
    </View>
  );
};

export default ProfilePage;
