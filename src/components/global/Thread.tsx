import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

const ICON_SIZE = 20;

interface IThread {
  id: string;
  profile_photo: string;
  username: string;
  content_text: string;
  content_photos: string[];
  likes_count: number;
  replies_count: number;
  timestamp: string;
}

const Thread = ({}: Partial<IThread>) => {
  return (
    <>
      <View style={style.threadContainer}>
        <View style={style.container}>
          <Image
            style={style.profilePhotoContainer}
            source={`https://picsum.photos/500/500`}
          />
          <View style={{ marginHorizontal: 8 }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}>
              kjordan_xyz
            </Text>
            <Text
              style={{
                marginVertical: 4,
                color: "#fff",
              }}>
              Hello Threads!
            </Text>
            {/* Icons */}
            <View style={style.iconsContainer}>
              <Feather
                style={style.icon}
                name='heart'
                size={ICON_SIZE}
                color='white'
              />
              <Feather
                style={style.icon}
                name='message-circle'
                size={ICON_SIZE}
                color='white'
              />
              <Feather
                style={style.icon}
                name='repeat'
                size={ICON_SIZE}
                color='white'
              />
              <Feather
                style={style.icon}
                name='send'
                size={ICON_SIZE}
                color='white'
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 8,
              }}>
              <Text style={{ color: "#aaa" }}>19 replies · </Text>
              <Text style={{ color: "#aaa" }}>8 likes</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#aaa", marginHorizontal: 8 }}>8h</Text>
            <MaterialCommunityIcons
              name='dots-horizontal'
              size={20}
              color='white'
            />
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  threadContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#222",
    borderStyle: "solid",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
  },
  profilePhotoContainer: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginRight: 16,
    marginTop: 8,
  },
});

export default Thread;
