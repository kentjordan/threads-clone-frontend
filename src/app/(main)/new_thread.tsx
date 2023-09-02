import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import uuid from "react-native-uuid";

import StartThread from "~/components/new_thread/StartThread";
import AddToThread from "~/components/new_thread/AddToThread";

const ThreadsPage = () => {
  const [startThreadItems, setStartThreadItem] = useState([
    { id: uuid.v4(), StartThread },
  ]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const nav = useNavigation();

  useEffect(() => {
    nav.addListener("focus", () => {
      setModalVisibility(!modalVisibility);
      setStartThreadItem([{ id: uuid.v4(), StartThread }]);
    });
  }, []);

  return (
    <View className='flex-1 bg-black'>
      <Modal
        animationType='slide'
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
          setStartThreadItem([{ id: uuid.v4(), StartThread }]);
          nav.goBack();
        }}
        className='flex flex-1 justify-center items-center bg-black z-50'>
        <View className='flex bg-black border-b border-b-white/25 flex-row items-center'>
          <View className='flex flex-row items-center m-4'>
            <Pressable
              onPress={() => {
                setModalVisibility(!modalVisibility);
                setStartThreadItem([{ id: uuid.v4(), StartThread }]);
                nav.goBack();
              }}>
              <MaterialIcons name='close' size={20} color='white' />
            </Pressable>
            <Text className='mx-2 font-medium text-stone-50'>New thread</Text>
          </View>
        </View>
        <ScrollView
          keyboardShouldPersistTaps='always'
          className='flex  bg-black'>
          {/* Start a thread... */}
          {startThreadItems.map(({ id, StartThread }, index) => (
            <StartThread
              key={id}
              startThreadItems={startThreadItems}
              setStartThreadItem={setStartThreadItem}
              uuid={id}
            />
          ))}
          {/* Add to thread */}
          <AddToThread {...{ startThreadItems, setStartThreadItem }} />
        </ScrollView>
        <View className='flex-row justify-between items-center p-2 bg-black w-full'>
          <Text className='text-[#777]'>Your followers can reply</Text>
          <Text className='font-medium text-lg text-cyan-600'>Post</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ThreadsPage;
