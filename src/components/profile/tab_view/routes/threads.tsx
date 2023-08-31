import { View, Text, ScrollView } from "react-native";
import Thread from "~/components/global/thread";

// TODO: Get all threads of the user by its id
const ThreadsRoute = () => (
  <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
    {/* <Text style={{ color: "#aaa", margin: 32 }}>You haven't posted yet.</Text> */}
    <ScrollView className='w-full' style={{ width: "100%" }}>
      <Thread></Thread>
      <Thread></Thread>
      <Thread></Thread>
      <Thread></Thread>
      <Thread></Thread>
      <Thread></Thread>
    </ScrollView>
  </View>
);

export default ThreadsRoute;
