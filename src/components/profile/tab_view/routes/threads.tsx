import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Thread from "~/components/global/Thread";

// TODO: Get all threads of the user by its id

interface IThreads {
  user_id?: string;
}

const ThreadsRoute = ({ user_id }: IThreads) => {
  const [threads, setThreads] = useState([Thread, Thread, Thread, Thread]);

  return (
    <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
      <ScrollView className='w-full' style={{ width: "100%" }}>
        {threads.map((Threads, _) => {
          return <Threads key={_} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ThreadsRoute;
