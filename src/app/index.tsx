import { View, ActivityIndicator, Text, StatusBar } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Redirect, SplashScreen, useRouter } from "expo-router";
import * as SlpashScreen from "expo-splash-screen";
import { ImageBackground } from "expo-image";

SlpashScreen.preventAutoHideAsync();

const App = () => {
  const router = useRouter();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000);
  }, []);

  const onLayout = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return (
      <>
        <StatusBar backgroundColor='#222' barStyle='default' />
        <ImageBackground
          className='flex flex-1 justify-center items-center bg-black p-8'
          source={require("../../assets/images/background.png")}></ImageBackground>
      </>
    );
  }

  return <Redirect href='/welcome' />;
};

export default App;
