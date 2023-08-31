import * as React from "react";
import { useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import RepliesRoute from "./routes/replies";
import RepostRoute from "./routes/reposts";
import ThreadsRoute from "./routes/threads";

const renderScene = SceneMap({
  threads: ThreadsRoute,
  replies: RepliesRoute,
  repost: RepostRoute,
});

export default function ProfileTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "threads", title: "Threads" },
    { key: "replies", title: "Replies" },
    { key: "repost", title: "Reposts" },
  ]);

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color }}>
              {route.title.charAt(0) + route.title.slice(1)}
            </Text>
          )}
          indicatorStyle={{ backgroundColor: "white", height: 1 }}
          style={{
            backgroundColor: "black",
          }}
        />
      )}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
